import { motion } from "framer-motion";
import { Globe2, Sparkles, Users2, Rocket } from "lucide-react";

const pillars = [
  { icon: Rocket, title: "Hands-on training", text: "Project-based learning in Cloud, Tech Support, VA, Customer Service, Telemarketing & AI-powered workflows." },
  { icon: Users2, title: "Mentorship", text: "Senior African mentors guide every learner from beginner to job-ready." },
  { icon: Globe2, title: "Global-ready", text: "Personal branding, remote-work skills and Upwork strategy to win clients worldwide." },
  { icon: Sparkles, title: "A real community", text: "A growing ecosystem where ambitious Africans network, collaborate and grow together." },
];

export function About() {
  return (
    <section id="about" className="relative pt-16 pb-10 sm:pt-20 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs">
              <span className="dw-gradient-text font-bold">About Digital Witch</span>
            </div>
            <h2 className="font-display mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-5xl">
              Building Africa's next generation of{" "}
              <span className="dw-gradient-text">global tech professionals</span>.
            </h2>
            <p className="mt-6 text-base text-zinc-400 sm:text-lg">
              Digital Witch is a modern EdTech platform and thriving professional
              community helping everyday Africans transition into globally
              competitive tech careers.
            </p>
            <p className="mt-4 text-base text-zinc-400">
              We train you in high-demand digital skills — Cloud Computing, Tech
              Support, Virtual Assistance, Customer Service, Telemarketing
              and emerging AI-powered workflows — through immersive,
              project-based learning and real mentorship.
            </p>
            <p className="mt-4 text-base text-zinc-400">
              Beyond the curriculum, we equip you with soft skills, remote-work
              know-how, personal branding and freelancing strategy so you can win
              opportunities on Upwork and beyond.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.li
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="dw-glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-10 w-10 place-items-center rounded-xl dw-gradient-bg shadow-[0_8px_24px_-8px_rgba(217,70,239,0.6)]">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm text-zinc-400">{p.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}