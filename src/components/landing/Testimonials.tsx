import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, Play, Sparkles, X, Search } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  origin: string;
  course: string;
  quote: string;
  outcome: string;
  initials: string;
  accent: string;
  rating: number;
  tags: string[]; // for AI matching
  videoUrl: string;
  thumbnail: string; // gradient identifier
}

const testimonials: Testimonial[] = [
  {
    name: "Chidinma Okoro",
    role: "Virtual Assistant",
    origin: "Enugu, Nigeria",
    course: "Virtual Assistant Mastery",
    quote:
      "I went from job-hunting with zero replies to earning $1,200 monthly on Upwork in 3 months.",
    outcome: "4 retainer clients in 90 days",
    initials: "CO",
    accent: "from-violet-400 to-fuchsia-400",
    rating: 5,
    tags: ["virtual assistant", "va", "admin", "executive assistant", "secretary", "receptionist", "office", "freelance", "upwork", "teacher", "tutor"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    name: "Amara Ndiaye",
    role: "Cloud Support Associate",
    origin: "Dakar, Senegal",
    course: "Cloud Computing Essentials",
    quote:
      "I never thought tech was for me. Now I troubleshoot AWS issues for a startup in London.",
    outcome: "Hired remote cloud support in 5 months",
    initials: "AN",
    accent: "from-cyan-400 to-blue-400",
    rating: 5,
    tags: ["cloud", "aws", "azure", "devops", "tech support", "it", "engineer", "developer", "sysadmin"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    name: "Kwame Asante",
    role: "Customer Success Rep",
    origin: "Accra, Ghana",
    course: "Customer Service Representative",
    quote:
      "From selling phone credit in traffic to handling support tickets for a SaaS company.",
    outcome: "Earns $1,800/month from a remote US role",
    initials: "KA",
    accent: "from-amber-400 to-orange-400",
    rating: 5,
    tags: ["customer service", "support", "csr", "call center", "retail", "sales", "hospitality", "waiter", "waitress", "cashier", "barista"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    name: "Fatima Ali",
    role: "Telemarketing Agent",
    origin: "Nairobi, Kenya",
    course: "Telemarketing & Cold Outreach",
    quote:
      "I used to be shy on the phone. Now I run cold-call campaigns for two agencies.",
    outcome: "3 agency contracts in 60 days",
    initials: "FA",
    accent: "from-pink-400 to-rose-400",
    rating: 4,
    tags: ["telemarketing", "cold call", "sales", "sdr", "bdr", "outreach", "marketing", "promoter"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "from-pink-500 via-rose-500 to-fuchsia-600",
  },
  {
    name: "Tunde Bakare",
    role: "Upwork Freelancer",
    origin: "Lagos, Nigeria",
    course: "Upwork: Open & Land Jobs",
    quote:
      "My profile used to get zero invites. After the Upwork module, I got my first interview in a week.",
    outcome: "Top Rated badge in 6 months",
    initials: "TB",
    accent: "from-emerald-400 to-teal-400",
    rating: 5,
    tags: ["upwork", "freelance", "freelancer", "writer", "designer", "developer", "unemployed", "graduate", "student"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    name: "Ngozi Mbatha",
    role: "Onboarding Specialist",
    origin: "Johannesburg, SA",
    course: "Customer Onboarding & Success",
    quote:
      "I was a receptionist for 4 years. Today I lead onboarding for a fintech serving 12,000 users.",
    outcome: "Promoted to lead in 8 months",
    initials: "NM",
    accent: "from-indigo-400 to-violet-400",
    rating: 5,
    tags: ["onboarding", "customer success", "receptionist", "admin", "hr", "operations", "manager", "fintech", "nurse", "healthcare", "caregiver", "teacher"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "from-indigo-500 via-violet-500 to-purple-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-white/10"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-bold text-white shadow-lg`}>
      {initials}
    </div>
  );
}

function VideoCard({ t, index, onPlay }: { t: Testimonial; index: number; onPlay: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_-20px_rgba(217,70,239,0.35)]"
    >
      {/* Video thumbnail */}
      <button
        type="button"
        onClick={onPlay}
        className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${t.thumbnail}`}
        aria-label={`Play video testimony from ${t.name}`}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)",
        }} />
        {/* Initials watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl font-bold text-white/15">{t.initials}</span>
        </div>
        {/* Gradient bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-black shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </span>
        </div>
        {/* Live badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Video testimony
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <Avatar initials={t.initials} accent={t.accent} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="truncate text-sm font-semibold text-white">{t.name}</h4>
              <StarRating rating={t.rating} />
            </div>
            <p className="mt-0.5 text-xs text-zinc-400">{t.role} · {t.origin}</p>
          </div>
        </div>

        <div className="relative mt-4 flex-1">
          <Quote className="absolute -left-1 -top-1 h-4 w-4 text-white/10" />
          <p className="pl-5 text-sm leading-relaxed text-zinc-300">{t.quote}</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/5 pt-4">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.outcome}
          </span>
          <button
            type="button"
            onClick={onPlay}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full dw-gradient-bg px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(217,70,239,0.6)] transition-transform hover:scale-[1.04]"
          >
            <Play className="h-3 w-3 fill-current" />
            Play
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ t, onClose }: { t: Testimonial; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
          aria-label="Close video"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-video w-full bg-black">
          <video
            key={t.videoUrl}
            src={t.videoUrl}
            controls
            autoPlay
            playsInline
            className="h-full w-full"
          />
        </div>
        <div className="flex items-center gap-3 border-t border-white/5 p-5">
          <Avatar initials={t.initials} accent={t.accent} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="truncate font-semibold text-white">{t.name}</h4>
              <StarRating rating={t.rating} />
            </div>
            <p className="text-xs text-zinc-400">{t.role} · {t.origin} · <span className="text-fuchsia-300">{t.course}</span></p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState<Testimonial | null>(null);

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return testimonials;
    const tokens = q.split(/\s+/).filter(Boolean);
    return testimonials.filter((t) => {
      const haystack = [t.role, t.course, ...t.tags, t.name].join(" ").toLowerCase();
      return tokens.some((tok) => haystack.includes(tok));
    });
  }, [filter]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative mx-auto mt-24 max-w-7xl px-5 sm:px-8"
    >
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-wider dw-gradient-text"
        >
          <span className="h-1.5 w-1.5 rounded-full dw-gradient-bg" />
          Success stories
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Real Africans, <span className="dw-gradient-text">real transformations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-sm text-zinc-400 sm:text-base"
        >
          Watch their videos. Hear it in their own voice.
        </motion.p>
      </div>

      {/* AI Context Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-8 max-w-2xl"
      >
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-full dw-gradient-bg opacity-40 blur-md transition-opacity group-focus-within:opacity-70" />
          <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-[#12121a]/90 px-4 py-3 backdrop-blur">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full dw-gradient-bg">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </span>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Tell us your current job… e.g. waiter, receptionist, graduate"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
            {filter ? (
              <button
                type="button"
                onClick={() => setFilter("")}
                className="grid h-6 w-6 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Clear filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : (
              <Search className="h-4 w-4 text-zinc-500" />
            )}
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-zinc-500">
          {filter.trim()
            ? `${filtered.length} alumni match your background`
            : "Our AI matches you with alumni who started where you are."}
        </p>

        {/* Suggestion chips */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-zinc-500">Try:</span>
          {["nurse", "teacher", "waiter", "graduate", "receptionist"].map((s) => {
            const active = filter.trim().toLowerCase() === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setFilter(active ? "" : s)}
                className={`rounded-full border px-3 py-1 text-[11px] font-medium capitalize transition-all ${
                  active
                    ? "border-transparent dw-gradient-bg text-white shadow-[0_6px_20px_-8px_rgba(217,70,239,0.6)]"
                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Video grid */}
      <div className="mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filtered.map((t, i) => (
                  <VideoCard
                    key={t.name}
                    t={t}
                    index={i}
                    onPlay={() => setActive(t)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center"
            >
              <p className="text-sm text-zinc-300">No exact match yet — but every Digital Witch path starts from zero.</p>
              <button
                type="button"
                onClick={() => setFilter("")}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full dw-gradient-bg px-4 py-2 text-xs font-semibold text-white"
              >
                See all stories
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && <VideoModal t={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
