"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef } from "react";

import { CheckIcon } from "@/components/ui/primitives";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { joinWaitlist } from "./actions";
import { emptyState } from "./state";

type Copy = Dictionary["waitlist"];
type ErrorCode = keyof Copy["errors"];

export function WaitlistForm({ locale, t }: { locale: Locale; t: Dictionary }) {
  const w = t.waitlist;
  const [state, formAction, pending] = useActionState(joinWaitlist, emptyState);

  const summaryRef = useRef<HTMLDivElement>(null);
  const nameId = useId();
  const emailId = useId();
  const sizeId = useId();
  const summaryId = useId();

  const codes = state.codes as ErrorCode[];
  const has = (code: ErrorCode) => codes.includes(code);

  // ux: focus-management — send focus to the summary after a failed submit so a
  // keyboard or screen-reader user is not left at the button wondering why.
  useEffect(() => {
    if (state.status === "error") summaryRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-positive-soft text-positive">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-2xl text-ink-900">{w.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-sm text-[16px] leading-relaxed text-ink-600">
          {w.successBody}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[15px] font-semibold text-ink-900 transition-colors hover:bg-sand-50"
        >
          {w.backHome}
        </Link>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
    >
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot. Hidden from sight and from assistive tech, and skipped by
          the tab order, so only an automated filler ever reaches it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0">
        <label htmlFor="company-field">Company</label>
        <input
          id="company-field"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* ux: error-summary — focusable, listed, each item linking to its field */}
      {state.status === "error" ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          id={summaryId}
          className="mb-6 rounded-xl border border-danger/30 bg-danger-soft p-4"
        >
          <p className="text-[15px] font-semibold text-danger">{w.errorSummary}</p>
          <ul className="mt-2 space-y-1">
            {codes.map((code) => {
              const target =
                code === "nameRequired"
                  ? `#${nameId}`
                  : code === "emailRequired" || code === "emailInvalid"
                    ? `#${emailId}`
                    : null;
              const message = w.errors[code];
              return (
                <li key={code} className="text-[14.5px] text-danger">
                  {target ? (
                    <a href={target} className="underline underline-offset-2">
                      {message}
                    </a>
                  ) : (
                    message
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="space-y-5">
        <Field
          id={nameId}
          name="name"
          label={w.nameLabel}
          placeholder={w.namePlaceholder}
          defaultValue={state.values.name}
          autoComplete="name"
          required
          error={has("nameRequired") ? w.errors.nameRequired : null}
        />

        <Field
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          label={w.emailLabel}
          placeholder={w.emailPlaceholder}
          defaultValue={state.values.email}
          autoComplete="email"
          required
          error={
            has("emailRequired")
              ? w.errors.emailRequired
              : has("emailInvalid")
                ? w.errors.emailInvalid
                : null
          }
        />

        <div>
          <label
            htmlFor={sizeId}
            className="block text-[15px] font-semibold text-ink-900"
          >
            {w.sizeLabel}
          </label>
          <p id={`${sizeId}-hint`} className="mt-1 text-[13.5px] text-ink-500">
            {w.sizeHint}
          </p>
          <select
            id={sizeId}
            name="size"
            defaultValue={state.values.size}
            aria-describedby={`${sizeId}-hint`}
            className="mt-2 min-h-11 w-full cursor-pointer rounded-xl border border-line-strong bg-surface px-3.5 text-[16px] text-ink-900"
          >
            <option value="">—</option>
            {w.sizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink-900 px-6 text-[16px] font-semibold text-sand-100 transition-all duration-200 hover:bg-ink-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-2 border-sand-100/40 border-t-sand-100 [animation:mockSpin_0.7s_linear_infinite]"
            />
            {w.submitting}
          </>
        ) : (
          w.submit
        )}
      </button>

      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-500">{w.consent}</p>

      {/* Announce the pending state without moving focus. */}
      <p aria-live="polite" className="sr-only">
        {pending ? w.submitting : ""}
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  defaultValue,
  error,
  required,
  type = "text",
  inputMode,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  error: string | null;
  required?: boolean;
  type?: string;
  inputMode?: "email" | "text";
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-[15px] font-semibold text-ink-900">
        {label}
        {required ? (
          <span className="ml-1 text-danger" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 min-h-11 w-full rounded-xl border bg-surface px-3.5 text-[16px] text-ink-900 placeholder:text-ink-400 ${
          error ? "border-danger" : "border-line-strong"
        }`}
      />

      {/* ux: error-placement — beside the field it belongs to, not only at the top */}
      {error ? (
        <p id={errorId} className="mt-1.5 text-[14px] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
