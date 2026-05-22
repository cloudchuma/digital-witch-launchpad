import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import heroTeam from "@/assets/hero-team.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        {/* Text card with faded background image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroTeam})` }}
          />
          {/* Dark fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/85 to-[#0a0a0f]/70" />
          <div className="absolute inset-0 bg-[#0a0a0f]/40" />

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative p-6 sm:p-10 text-center lg:text-left"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="dw-pulse absolute inline-flex h-full w-full rounded-full bg-fuchsia-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              </span>
              <span className="font-semibold dw-gradient-text">Learn IT support. Land remote jobs. Work from anywhere.</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[56px]"
            >
              Master IT Support.{" "}
              <span className="dw-gradient-text">Get on Upwork.</span>{" "}
              Start earning.
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-5 max-w-lg text-base text-zinc-300 sm:text-lg lg:mx-0"
            >
              Digital Witch trains Africans in Tech Support, Virtual Assistance,
              Customer Service, Telemarketing, and Cloud Computing — then guides you
              step-by-step to open an Upwork account and land your first paying client.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-2 rounded-full dw-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(217,70,239,0.7)] transition-transform hover:scale-[1.03]"
              >
                <Sparkles className="h-4 w-4" />
                Start your journey
              </a>
              <a
                href="#programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/[0.1]"
              >
                Explore programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["#8b5cf6", "#d946ef", "#f59e0b", "#22d3ee", "#34d399"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#0a0a0f]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-white">2,400+ Africans</span> already earning on Upwork & beyond
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
