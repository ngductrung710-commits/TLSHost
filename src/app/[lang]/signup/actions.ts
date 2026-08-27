"use server";

import { headers } from "next/headers";

import { isRateLimited, looksLikeEmail, recordSignup } from "@/lib/waitlist";

import { emptyState, type WaitlistState } from "./state";

const MAX_NAME = 120;
const MAX_SIZE = 60;

function field(data: FormData, key: string, max: number): string {
  const raw = data.get(key);
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const name = field(formData, "name", MAX_NAME);
  const email = field(formData, "email", 254);
  const size = field(formData, "size", MAX_SIZE);
  const locale = field(formData, "locale", 8) || "vi";

  const values = { name, email, size };

  // Honeypot. A real person never sees this input, so anything in it is a bot.
  // Answer with the success shape rather than an error: a bot that is told it
  // failed simply retries.
  if (field(formData, "company", 200) !== "") {
    return { status: "success", codes: [], values: emptyState.values };
  }

  const codes: string[] = [];
  if (name === "") codes.push("nameRequired");
  if (email === "") codes.push("emailRequired");
  else if (!looksLikeEmail(email)) codes.push("emailInvalid");

  if (codes.length > 0) {
    return { status: "error", codes, values };
  }

  // This action is reachable by direct POST, not only through the form, so the
  // limiter runs on every accepted submission rather than in the browser.
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return { status: "error", codes: ["rateLimited"], values };
  }

  try {
    await recordSignup({ name, email, size, locale });
  } catch (error) {
    // The address is the one thing worth not losing, so make the failure
    // findable in the PM2 log rather than swallowing it.
    console.error("[waitlist] failed to record signup", error);
    return { status: "error", codes: ["server"], values };
  }

  return { status: "success", codes: [], values: emptyState.values };
}
