import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="join" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/15 to-amber-500/15 p-8 sm:p-14"
        >
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute inset-0 dw-grid opacity-40" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-zinc-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="dw-pulse absolute inline-flex h-full w-full rounded-full bg-fuchsia-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                </span>
                Next cohort starts soon
              </div>
              <h2 className="font-display mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-5xl">
                Your <span className="dw-gradient-text">global tech career</span> starts this week.
              </h2>
              <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
                Join 2,400+ Africans learning Cloud, Tech Support, VA, Customer
                Service and Telemarketing — and getting paid on Upwork.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
                <a
                  href="#join"
                  className="group inline-flex items-center justify-center gap-2 rounded-full dw-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(217,70,239,0.7)] transition-transform hover:scale-[1.03]"
                >
                  <Sparkles className="h-4 w-4" />
                  Claim your seat
                </a>
                <a
                  href="#programs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
                >
                  Talk to a mentor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Live mentor support",
                "Real Upwork playbook",
                "Project-based learning",
                "Private WhatsApp cohort",
                "Personal branding help",
                "Beginner-friendly",
              ].map((t) => (
                <li
                  key={t}
                  className="dw-glass rounded-xl px-3 py-3 text-zinc-200"
                >
                  <span className="dw-gradient-text font-semibold">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}