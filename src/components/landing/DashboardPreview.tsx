import { BookOpen, Play, MessageCircle, Trophy, Flame, Users } from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      {/* Glow */}
      <div
        className="absolute -inset-10 -z-10 rounded-[40px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.45), rgba(217,70,239,0.25) 50%, transparent 75%)",
        }}
      />

      <div className="dw-float">
        <div className="dw-glass overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="font-display text-xs text-zinc-400">digitalwitch.io / programs</span>
            <div className="flex items-center gap-1.5 rounded-full bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
              <Flame className="h-3 w-3" /> 14d streak
            </div>
          </div>

          <div className="grid grid-cols-12 gap-0">
            {/* Sidebar */}
            <aside className="col-span-4 border-r border-white/5 p-4">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-zinc-500">My programs</p>
              <ul className="space-y-1.5">
                {[
                  { label: "Tech Support", active: true },
                  { label: "Virtual Assistant", active: false },
                  { label: "Customer Service", active: false },
                  { label: "Cloud Computing", active: false },
                  { label: "Upwork & Freelancing", active: false },
                ].map((c) => (
                  <li
                    key={c.label}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${
                      c.active
                        ? "bg-white/8 text-white"
                        : "text-zinc-400 hover:bg-white/5"
                    }`}
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span className="truncate">{c.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <Users className="h-3.5 w-3.5" /> Cohort #07
                </div>
                <div className="mt-2 flex -space-x-2">
                  {["#8b5cf6", "#d946ef", "#f59e0b", "#22d3ee"].map((c, i) => (
                    <span
                      key={i}
                      className="h-6 w-6 rounded-full border-2 border-[#12121a]"
                      style={{ background: c }}
                    />
                  ))}
                  <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#12121a] bg-white/10 text-[9px] font-medium text-white">
                    +42
                  </span>
                </div>
              </div>
            </aside>

            {/* Main */}
            <main className="col-span-8 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-fuchsia-300">
                    Module 2 · Lesson 4
                  </p>
                  <h3 className="font-display mt-1 text-base font-semibold text-white">
                    Tech Support — Troubleshooting Workflow
                  </h3>
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-full dw-gradient-bg text-white shadow-[0_6px_20px_-4px_rgba(217,70,239,0.6)]">
                  <Play className="h-4 w-4" fill="currentColor" />
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Course progress</span>
                  <span className="text-white">62%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full dw-gradient-bg"
                    style={{ width: "62%" }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-white">Mentor Chidi N.</p>
                  <p className="truncate text-[11px] text-zinc-400">Live in 2h · Upwork profile reviews</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                  <Trophy className="h-3.5 w-3.5 text-amber-300" />
                  <p className="mt-2 font-display text-base font-semibold text-white">3 sent</p>
                  <p className="text-[10px] text-zinc-400">Proposals this week</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                  <MessageCircle className="h-3.5 w-3.5 text-fuchsia-300" />
                  <p className="mt-2 font-display text-base font-semibold text-white">12 new</p>
                  <p className="text-[10px] text-zinc-400">Cohort messages</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="dw-float absolute -left-4 top-1/3 hidden items-center gap-2 rounded-full dw-glass px-3 py-2 text-xs text-white sm:flex" style={{ animationDelay: "-2s" }}>
        <MessageCircle className="h-3.5 w-3.5 text-fuchsia-300" />
        New mentor message
      </div>
      <div className="dw-float absolute -right-2 -bottom-2 hidden items-center gap-2 rounded-full dw-glass px-3 py-2 text-xs text-white sm:flex" style={{ animationDelay: "-4s" }}>
        <Trophy className="h-3.5 w-3.5 text-amber-300" />
        +120 XP earned
      </div>
    </div>
  );
}