import { Clock, ArrowRight, Sparkles, Users2, Star } from "lucide-react";
import { motion } from "framer-motion";
import techSupportImg from "@/assets/courses/tech-support.jpg";
import virtualAssistantImg from "@/assets/courses/virtual-assistant.jpg";
import customerServiceImg from "@/assets/courses/customer-service.jpg";
import telemarketingImg from "@/assets/courses/telemarketing.jpg";
import cloudImg from "@/assets/courses/cloud.jpg";
import communicationImg from "@/assets/courses/communication.jpg";
import onboardingImg from "@/assets/courses/onboarding.jpg";
import customerSuccessImg from "@/assets/courses/customer-success.jpg";
import upworkImg from "@/assets/courses/upwork.jpg";

type Level = "Beginner" | "Intermediate";

type Course = {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: Level;
  accent: string;
  tags: string[];
  students: string;
  rating: string;
};

const courses: Course[] = [
  {
    image: techSupportImg,
    title: "Tech Support Fundamentals",
    description: "Troubleshoot software, hardware and network issues like a pro help-desk agent.",
    duration: "6 weeks",
    level: "Beginner",
    accent: "from-violet-500/70 to-fuchsia-500/10",
    tags: ["Ticketing", "Zendesk", "Networking"],
    students: "1.2k",
    rating: "4.9",
  },
  {
    image: virtualAssistantImg,
    title: "Virtual Assistant Mastery",
    description: "Manage inboxes, calendars, research and client workflows for global founders.",
    duration: "4 weeks",
    level: "Beginner",
    accent: "from-fuchsia-500/70 to-amber-500/10",
    tags: ["Email", "Calendar", "Notion"],
    students: "980",
    rating: "4.8",
  },
  {
    image: customerServiceImg,
    title: "Customer Service Rep",
    description: "Handle live chat, email and voice tickets with empathy and clear SLAs.",
    duration: "5 weeks",
    level: "Beginner",
    accent: "from-amber-500/70 to-violet-500/10",
    tags: ["Live Chat", "SLAs", "CSAT"],
    students: "1.5k",
    rating: "4.9",
  },
  {
    image: telemarketingImg,
    title: "Telemarketing & Outreach",
    description: "Build call scripts, qualify leads and convert prospects over the phone.",
    duration: "3 weeks",
    level: "Intermediate",
    accent: "from-violet-500/70 to-fuchsia-500/10",
    tags: ["Scripts", "Cold Calls", "CRM"],
    students: "640",
    rating: "4.7",
  },
  {
    image: cloudImg,
    title: "Cloud Computing Essentials",
    description: "Get comfortable with AWS, Azure and GCP basics every remote tech worker needs.",
    duration: "8 weeks",
    level: "Intermediate",
    accent: "from-cyan-400/70 to-violet-500/10",
    tags: ["AWS", "Azure", "GCP"],
    students: "2.1k",
    rating: "4.9",
  },
  {
    image: communicationImg,
    title: "Communication Tools in Tech",
    description: "Master Slack, Zoom, Notion, Jira, HubSpot, Zendesk and modern team stacks.",
    duration: "2 weeks",
    level: "Beginner",
    accent: "from-fuchsia-500/70 to-amber-500/10",
    tags: ["Slack", "Zoom", "Jira"],
    students: "1.8k",
    rating: "4.8",
  },
  {
    image: onboardingImg,
    title: "Customer Onboarding",
    description: "Design smooth onboarding journeys that activate new users from day one.",
    duration: "3 weeks",
    level: "Intermediate",
    accent: "from-emerald-400/70 to-violet-500/10",
    tags: ["Activation", "Playbooks"],
    students: "520",
    rating: "4.8",
  },
  {
    image: customerSuccessImg,
    title: "Customer Success",
    description: "Retain, expand and delight customers with proven CS playbooks and metrics.",
    duration: "4 weeks",
    level: "Intermediate",
    accent: "from-amber-500/70 to-fuchsia-500/10",
    tags: ["Retention", "QBRs", "NRR"],
    students: "740",
    rating: "4.9",
  },
  {
    image: upworkImg,
    title: "Upwork: Open & Land Jobs",
    description: "Set up a winning profile, write proposals that get replies and close your first clients.",
    duration: "2 weeks",
    level: "Beginner",
    accent: "from-violet-500/70 to-amber-500/10",
    tags: ["Proposals", "Profile", "Niche"],
    students: "3.4k",
    rating: "5.0",
  },
];

function LevelBadge({ level }: { level: Level }) {
  const styles =
    level === "Beginner"
      ? "bg-emerald-400/20 text-emerald-200 ring-emerald-400/40"
      : "bg-amber-400/20 text-amber-200 ring-amber-400/40";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 backdrop-blur-md ${styles}`}
    >
      {level}
    </span>
  );
}

export function Courses() {
  return (
    <section id="programs" className="relative mx-auto mt-20 max-w-7xl px-5 sm:px-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-wider dw-gradient-text">
          <Sparkles className="h-3 w-3 text-fuchsia-300" />
          Learning paths
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Beginner-friendly programs that{" "}
          <span className="dw-gradient-text">land you remote jobs</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          Pick a path, learn from senior African mentors, and graduate ready to earn on
          Upwork and beyond.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/30 hover:shadow-[0_30px_80px_-20px_rgba(217,70,239,0.45)]"
          >
            {/* Gradient ring glow on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-fuchsia-500/0 via-violet-500/0 to-amber-500/0 opacity-0 transition-opacity duration-500 group-hover:from-fuchsia-500/30 group-hover:via-violet-500/20 group-hover:to-amber-500/30 group-hover:opacity-100 [mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)] [mask-composite:exclude] p-px" />

            {/* Image header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={768}
                height={512}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${c.accent} mix-blend-overlay`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

              {/* Top row badges */}
              <div className="absolute inset-x-3 top-3 flex items-start justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-amber-200 ring-1 ring-amber-300/30 backdrop-blur-md">
                  <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
                  {c.rating}
                </span>
                <LevelBadge level={c.level} />
              </div>

              {/* Bottom row: duration + students */}
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] text-white ring-1 ring-white/10 backdrop-blur-md">
                  <Clock className="h-3 w-3" />
                  {c.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] text-white ring-1 ring-white/10 backdrop-blur-md">
                  <Users2 className="h-3 w-3" />
                  {c.students}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold leading-tight text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {c.description}
              </p>

              {/* Skill tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex-1" />

              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 group-hover:border-transparent group-hover:dw-gradient-bg group-hover:shadow-[0_10px_30px_-12px_rgba(217,70,239,0.7)]"
              >
                Enroll now
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
