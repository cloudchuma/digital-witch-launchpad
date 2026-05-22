import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/digital-witch-logo.jpg";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Upwork Guide", href: "#upwork" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(217,70,239,0.55)]">
            <img src={logo} alt="Digital Witch logo" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
            Digital Witch
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#signin"
            className="rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#join"
            className="rounded-full dw-gradient-bg px-4 py-2 text-sm font-medium text-white shadow-[0_8px_28px_-8px_rgba(217,70,239,0.6)] transition-transform hover:scale-[1.03]"
          >
            Join cohort
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a href="#signin" className="flex-1 rounded-full border border-white/10 px-4 py-2.5 text-center text-sm text-white">
                Sign in
              </a>
              <a href="#join" className="flex-1 rounded-full dw-gradient-bg px-4 py-2.5 text-center text-sm font-medium text-white">
                Join cohort
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}