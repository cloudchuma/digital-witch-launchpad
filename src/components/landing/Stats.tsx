import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 2400, suffix: "+", label: "Africans trained" },
  { value: 18, label: "Countries" },
  { value: 85, suffix: "%", label: "Land first client" },
  { value: 120, suffix: "+", label: "Active mentors" },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function StatItem({ s, start }: { s: Stat; start: boolean }) {
  const n = useCountUp(s.value, start);
  const formatted = s.value >= 1000 ? n.toLocaleString() : String(n);
  return (
    <div className="px-4 py-6 text-center sm:py-8">
      <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="dw-gradient-text">
          {formatted}
          {s.suffix ?? ""}
        </span>
      </p>
      <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto mt-20 max-w-6xl px-5 sm:mt-28 sm:px-8">
      <div className="dw-glass grid grid-cols-2 divide-x divide-y divide-white/5 overflow-hidden rounded-3xl sm:grid-cols-4 sm:divide-y-0">
        {stats.map((s) => (
          <StatItem key={s.label} s={s} start={inView} />
        ))}
      </div>
    </div>
  );
}