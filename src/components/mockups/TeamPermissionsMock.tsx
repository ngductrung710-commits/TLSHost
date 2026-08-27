import { MockFrame } from "@/components/mockups/MockFrame";
import type { Dictionary } from "@/i18n/dictionaries/vi";

const MEMBERS = [
  { initials: "BN", name: "Bao Nguyen", email: "bao@anbang.vn", scope: "all", role: "owner" },
  { initials: "ML", name: "Mai Le", email: "mai@anbang.vn", scope: "3", role: "collab" },
  { initials: "HV", name: "Hoang Vu", email: "hoang@anbang.vn", scope: "2", role: "collab" },
  { initials: "TD", name: "Trang Do", email: "trang@anbang.vn", scope: "1", role: "house" },
] as const;

export function TeamPermissionsMock({ t }: { t: Dictionary }) {
  const m = t.mock.team;

  const roleLabel = {
    owner: m.owner,
    collab: m.collaborator,
    house: m.housekeeper,
  } as const;

  const roleStyle = {
    owner: "bg-ink-900 text-sand-100",
    collab: "bg-sand-200 text-ink-700",
    house: "bg-clay-100 text-clay-700",
  } as const;

  return (
    <MockFrame
      title={m.title}
      subtitle={`4 ${m.members}`}
      action={
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-700">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M8 3.5v9M3.5 8h9" />
          </svg>
          {m.invite}
        </span>
      }
    >
      <div className="divide-y divide-line">
        {MEMBERS.map((member, i) => (
          <div
            key={member.email}
            className="flex items-center gap-3 px-4 py-3 [animation:mockRise_0.5s_var(--ease-out-soft)_both]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand-200 font-mono text-[10px] font-bold text-ink-700">
              {member.initials}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink-900">
                {member.name}
              </p>
              <p className="truncate text-[10.5px] text-ink-500 wrap-anywhere">
                {member.email} ·{" "}
                <span className="tnum">
                  {member.scope === "all"
                    ? m.allProperties
                    : `${member.scope} ${m.propertiesSuffix}`}
                </span>
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[9.5px] font-semibold ${roleStyle[member.role]}`}
            >
              {roleLabel[member.role]}
            </span>
          </div>
        ))}
      </div>

      <p className="border-t border-line bg-sand-50 px-4 py-3 text-[11px] text-ink-500">
        {m.note}
      </p>
    </MockFrame>
  );
}
