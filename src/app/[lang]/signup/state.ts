/**
 * Shared shape for the waitlist form state.
 *
 * This lives outside actions.ts on purpose: a "use server" module may only
 * export async functions, so exporting a plain object from there hands the
 * client `undefined` instead of the initial state.
 */
export type WaitlistState = {
  status: "idle" | "success" | "error";
  /** Message keys, resolved to text by the client against its dictionary. */
  codes: string[];
  /** Echoed back so a rejected submission does not clear what was typed. */
  values: { name: string; email: string; size: string };
};

export const emptyState: WaitlistState = {
  status: "idle",
  codes: [],
  values: { name: "", email: "", size: "" },
};
