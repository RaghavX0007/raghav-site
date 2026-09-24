import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghav — 19. Solo builder. Saharanpur." },
      {
        name: "description",
        content:
          "Raghav, 19, from Saharanpur. I learn by building real things, breaking them, and building again.",
      },
      { property: "og:title", content: "Raghav — 19. Solo builder. Saharanpur." },
      {
        property: "og:description",
        content:
          "Raghav, 19, from Saharanpur. I learn by building real things, breaking them, and building again.",
      },
    ],
  }),
  component: Index,
});

const works = [
  {
    no: "01",
    year: "2025",
    title: "Thought Seed",
    kind: "Product · AI · Full-stack",
    blurb:
      "Journal to tweets, powered by Gemini. Write what's on your mind — AI extracts the signal and hands you content worth sharing. Live and shipping.",
    href: null as string | null, // TODO: add the live Thought Seed website URL
  },
  {
    no: "02",
    year: "2026",
    title: "Next Build",
    kind: "Classified",
    blurb: "Something is being built. Details when it ships.",
    href: null as string | null,
  },
];




const stats = [
  { k: "Building since", v: "2026" },
  { k: "Products live", v: "1" },
  { k: "Age", v: "19" },
];

const credo = [
  "Quiet over loud",
  "Ship over plan",
  "One thing, done well",
  "Made by hand",
  "Built in Saharanpur",
];

function Index() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const hero = document.querySelector('.ts-hero');
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      const eyebrow = hero.querySelector('.ts-eyebrow') as HTMLElement | null;
      const h1 = hero.querySelector('.ts-headline') as HTMLElement | null;
      const sub = hero.querySelector('.ts-sub') as HTMLElement | null;
      const desc = hero.querySelector('.ts-desc') as HTMLElement | null;
      const cta = hero.querySelector('.ts-cta') as HTMLElement | null;
      if (eyebrow) eyebrow.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
      if (h1) h1.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
      if (sub) sub.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      if (desc) desc.style.transform = `translate(${x * 7}px, ${y * 7}px)`;
      if (cta) cta.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <header className="hairline border-b relative z-20">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-7 font-mono-x text-[13px] uppercase tracking-[0.24em] text-ink-soft">
          <span>RAGHAV · SOLO BUILDER</span>
          <span className="hidden md:inline">INDEX&nbsp; ·&nbsp; WORKS&nbsp; ·&nbsp; CONTACT</span>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-ink-soft hover:text-vermilion transition-colors text-2xl leading-none inline-flex items-center pr-4 md:pr-8"
          >
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </header>



      {/* HERO */}
      <section className="ts-hero relative overflow-hidden border-b hairline">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 pt-16 pb-24 md:pt-24 md:pb-36">
          <div className="col-span-12 md:col-span-2">
            <div className="ts-eyebrow rise font-mono-x text-[10px] uppercase tracking-[0.3em] text-vermilion" style={{ animationDelay: "0s" }}>
              Vol. I / No. 001 / June MMXXVI
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <h1 className="ts-headline font-display text-ink" style={{ fontSize: "clamp(54px, 9vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.025em", fontWeight: 350 }}>
              <span className="rise block text-vermilion" style={{ animationDelay: "0.05s" }}>Building things</span>
              <span className="ts-sub rise block font-serif-x italic" style={{ animationDelay: "0.2s", fontWeight: 400 }}>
                that ship.
              </span>
              <span className="rise block" style={{ animationDelay: "0.35s" }}>{"\n"}</span>
            </h1>

            <div className="rise mt-10 grid grid-cols-1 gap-8 md:grid-cols-12" style={{ animationDelay: "0.55s" }}>
              <p className="ts-desc col-span-12 md:col-span-7 font-serif-x text-[20px] leading-[1.55] text-ink-soft md:text-[22px]">
                I'm Raghav — 19 year old developer/ solo builder. I learn by building real things, breaking them, and building again. Every project is a lesson.Every bug is a teacher.
              </p>
              <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end">
                <a
                  href="#contact"
                  className="ts-cta marker-dot self-start font-mono-x text-[12px] uppercase tracking-[0.22em] text-ink underline-offset-[6px] hover:underline"
                >
                  See what I've built
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 flex items-start justify-end">
            <div className="relative size-[120px] md:size-[140px]">
              <svg viewBox="0 0 200 200" className="spin-slow size-full">
                <defs>
                  <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text className="fill-ink-soft" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>
                  <textPath href="#circ">· 19 · SOLO BUILDER · SAHARANPUR IN · EST. MMXXV ·</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-serif-x italic text-vermilion" style={{ fontSize: 32 }}>R</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee credo */}
        <div className="relative z-10 overflow-hidden border-y hairline bg-paper-deep py-4 isolate">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-serif-x text-[22px] italic text-ink-soft">
            {[...credo, ...credo, ...credo, ...credo].map((c, i) => (
              <span key={i} className="flex items-center gap-12">
                {c}
                <span className="text-vermilion">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1240px] grid grid-cols-12 gap-6 px-6 py-24 md:py-32">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-vermilion">§ 01</div>
            <h2 className="mt-4 font-display text-[44px] leading-[0.95] tracking-tight" style={{ fontWeight: 350 }}>
              Selected
              <br />
              <span className="font-serif-x italic">works,</span>
              <br />
              one of many.
            </h2>
          </div>

          <ol className="col-span-12 md:col-span-9 divide-y divide-[var(--rule)] border-y hairline">
            {works.map((w) => (
              <li key={w.no} className="group grid grid-cols-12 gap-4 py-8 transition-colors hover:bg-paper-deep">
                <div className="col-span-2 font-mono-x text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  {w.no} · {w.year}
                </div>
                <div className="col-span-10 md:col-span-7">
                  {w.href ? (
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-[32px] leading-[1.05] underline-offset-[6px] hover:underline"
                      style={{ fontWeight: 400 }}
                    >
                      {w.title} <span className="font-serif-x italic text-vermilion">↗</span>
                    </a>
                  ) : (
                    <div className="font-display text-[32px] leading-[1.05]" style={{ fontWeight: 400 }}>
                      {w.title}
                    </div>
                  )}
                  <p className="mt-3 max-w-[60ch] font-serif-x text-[17px] leading-[1.55] text-ink-soft">{w.blurb}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right font-mono-x text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  {w.kind}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b hairline bg-paper-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 py-24 md:py-32">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-vermilion">§ 02 · About</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-ink" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.2, fontWeight: 350 }}>
              I'm <span className="font-serif-x italic">19,</span> from Saharanpur. I learn by building real things, breaking them, and building again. Every project is a lesson. Every bug is a teacher.
            </p>

            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t hairline pt-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.k}>
                  <dt className="font-mono-x text-[10px] uppercase tracking-[0.22em] text-ink-soft">{s.k}</dt>
                  <dd className="mt-2 font-display text-[40px] leading-none" style={{ fontWeight: 400 }}>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="border-b hairline bg-ink text-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 py-24 md:py-32">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono-x text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--ochre)" }}>§ 03 · Letters</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <a
              href="mailto:gandhi.raghav161007@gmail.com"
              className="font-display block tracking-tight whitespace-nowrap"
              style={{ fontSize: "clamp(22px, 4vw, 56px)", lineHeight: 1, fontWeight: 350 }}
            >
              gandhi.raghav161007@gmail.com

            </a>
            <p className="mt-8 max-w-[52ch] font-serif-x text-[20px] leading-[1.55] text-paper/80">
              Tell me what you're building. I read every message, usually late at night.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-mono-x text-[11px] uppercase tracking-[0.22em] text-paper/70">
              {["Twitter / X", "GitHub"].map((s) => (
                <li key={s} className="hover:text-paper">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-8 font-mono-x text-[10px] uppercase tracking-[0.22em] text-ink-soft md:flex-row md:items-center">
          <span>© MMXXVI — Raghav · Set in Fraunces &amp; Instrument Serif</span>
          <span>Built in Saharanpur, India</span>
        </div>
      </footer>
    </div>
  );
}
