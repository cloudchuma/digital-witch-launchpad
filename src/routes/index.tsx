import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Courses } from "@/components/landing/Courses";
import { Testimonials } from "@/components/landing/Testimonials";
import { About } from "@/components/landing/About";
import { Community } from "@/components/landing/Community";
import { CTA } from "@/components/landing/CTA";
import { BackgroundFX } from "@/components/landing/BackgroundFX";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] font-body text-white">
      <BackgroundFX />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Testimonials />
        <Courses />
        <Community />
        <CTA />
        <footer className="mx-auto mt-24 max-w-7xl px-5 pb-10 text-center text-xs text-zinc-500 sm:px-8">
          © {new Date().getFullYear()} Digital Witch · Global tech careers, built for everyone
        </footer>

      </div>
    </div>
  );
}
