import { motion } from "framer-motion";
import { Sparkles, CheckCheck, Camera, Mic, Paperclip, Smile } from "lucide-react";

type Group = {
  title: string;
  subtitle: string;
  members: number;
  accent: string; // gradient for logo halo
  messages: { name: string; color: string; text: string; time: string }[];
};

const groups: Group[] = [
  {
    title: "DW · Cohort #07 · Cloud Computing",
    subtitle: "318 members",
    members: 318,
    accent: "from-violet-500 to-fuchsia-500",
    messages: [
      { name: "Mentor Tunde", color: "#f59e0b", text: "AWS lab room opens in 30 mins ☁️ bring your screenshots", time: "10:42" },
      { name: "Amara · Dakar", color: "#f472b6", text: "Just passed the IAM module quiz 9/10 🔥", time: "10:44" },
      { name: "Kwame · Accra", color: "#22d3ee", text: "Anyone pairing on the S3 task tonight?", time: "10:46" },
    ],
  },
  {
    title: "DW · Aug/Sept · IT Support",
    subtitle: "212 members",
    members: 212,
    accent: "from-fuchsia-500 to-amber-500",
    messages: [
      { name: "Mentor Chidi", color: "#8b5cf6", text: "Drop your ticketing-system screenshots — I'll review live 🎤", time: "09:12" },
      { name: "Ngozi · Lagos", color: "#34d399", text: "Cleared my first Zendesk macro task today 💪", time: "09:14" },
      { name: "Fatima · Nairobi", color: "#60a5fa", text: "Got my Upwork profile approved 🎉🎉", time: "09:20" },
    ],
  },
  {
    title: "DW · Cohort #05 · Virtual Assistants",
    subtitle: "264 members",
    members: 264,
    accent: "from-emerald-400 to-cyan-500",
    messages: [
      { name: "Mentor Ada", color: "#d946ef", text: "Calendar mastery class · tomorrow 6pm WAT 🗓️", time: "14:08" },
      { name: "Bola · Ibadan", color: "#f59e0b", text: "Landed a $600/mo retainer this week 🥳", time: "14:11" },
      { name: "Ife · Abuja", color: "#f472b6", text: "Sharing my proposal template in the docs channel ✨", time: "14:13" },
    ],
  },
];

export function Community() {
  return (
    <section id="mentorship" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            <span className="font-bold dw-gradient-text">A community, not just a course</span>
          </div>
          <h2 className="font-display mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-5xl">
            Learn together.{" "}
            <span className="dw-gradient-text">Grow together.</span>
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            Every cohort gets its own private WhatsApp group — mentors, peers and
            daily wins, all in one place.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((g, i) => (
            <WhatsAppCard key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DWLogo({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full">
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} opacity-90`} />
      <div className="absolute inset-[2px] rounded-full bg-[#0a0a0f]" />
      <span className="font-display relative text-sm font-extrabold tracking-tight text-white">
        DW
      </span>
    </div>
  );
}

function WhatsAppCard({ group, index }: { group: Group; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b141a] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]"
    >
      {/* Phone notch */}
      <div className="flex items-center justify-center bg-black/60 py-1.5">
        <div className="h-1 w-16 rounded-full bg-white/15" />
      </div>

      {/* WhatsApp header */}
      <div className="flex items-center gap-3 bg-[#1f2c33] px-4 py-3">
        <DWLogo accent={group.accent} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-white">{group.title}</div>
          <div className="text-[11px] text-emerald-300">● {group.subtitle} · online</div>
        </div>
        <div className="flex flex-col gap-0.5 text-zinc-400">
          <span className="h-0.5 w-0.5 rounded-full bg-current" />
          <span className="h-0.5 w-0.5 rounded-full bg-current" />
          <span className="h-0.5 w-0.5 rounded-full bg-current" />
        </div>
      </div>

      {/* Chat area with subtle WA pattern */}
      <div
        className="relative space-y-2 px-3 py-4"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(217,70,239,0.06) 0, transparent 40%), radial-gradient(circle at 90% 90%, rgba(139,92,246,0.06) 0, transparent 40%)",
        }}
      >
        {group.messages.map((m, idx) => {
          const isMe = idx === group.messages.length - 1;
          return (
            <div
              key={idx}
              className={`flex items-end gap-2 ${isMe ? "flex-row-reverse" : ""}`}
            >
              <span
                className="h-6 w-6 shrink-0 rounded-full ring-2 ring-[#0b141a]"
                style={{ background: m.color }}
              />
              <div
                className={`max-w-[78%] rounded-2xl px-3 py-2 text-[13px] shadow ${
                  isMe
                    ? "rounded-br-sm bg-[#005c4b] text-emerald-50"
                    : "rounded-bl-sm bg-[#1f2c33] text-zinc-100"
                }`}
              >
                {!isMe && (
                  <div className="text-[10px] font-semibold" style={{ color: m.color }}>
                    {m.name}
                  </div>
                )}
                <p className="leading-snug">{m.text}</p>
                <div
                  className={`mt-1 flex items-center justify-end gap-1 text-[9px] ${
                    isMe ? "text-emerald-200/80" : "text-zinc-400"
                  }`}
                >
                  {m.time}
                  {isMe && <CheckCheck className="h-3 w-3 text-cyan-300" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WA input bar */}
      <div className="flex items-center gap-2 border-t border-white/5 bg-[#1f2c33] px-3 py-2.5">
        <Smile className="h-4 w-4 text-zinc-400" />
        <div className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[11px] text-zinc-400">
          Message
        </div>
        <Paperclip className="h-4 w-4 text-zinc-400" />
        <Camera className="h-4 w-4 text-zinc-400" />
        <div className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
          <Mic className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.div>
  );
}
