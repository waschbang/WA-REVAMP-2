import { useEffect, useRef, useState } from "react";
import { Button } from "@/ui/button";
import skillhouseLogo from "@/assets/skillhouse.png";
import imagineLogo from "@/assets/Imagine logo.png";
import pdpLogo from "@/assets/pdp.png";
import schbangLogo from "@/assets/Schbang Logo_Main.png";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "BeerBiceps SkillHouse",
      result: "11,000+ leads in 14 days • 2,200 paid enrollments • 92% reminder open rates",
      meta: "Creator-led Edtech",
      detail:
        "Creator-led edtech by Ranveer Allahbadia (BeerBiceps), offering skill-based courses to upskill young India. We powered their launch with AI-driven conversations, CTWA ads, automated reminders, and upsell journeys.",
      logo: skillhouseLogo,
      alt: "SkillHouse logo",
      bullets: [
        "AI-driven conversations",
        "CTWA ads for acquisition",
        "Automated reminders & upsell journeys",
      ],
      tags: ["Edtech", "Creator", "CTWA"],
    },
    {
      title: "Papa Don’t Preach",
      result: "6,000 bridal appointment interests • ₹1.8–2.5L average order",
      meta: "Luxury Fashion",
      detail:
        "Luxury fashion label by Shubhika Sharma. We built a guided WhatsApp store that matched shoppers with products based on occasion and style.",
      logo: pdpLogo,
      alt: "Papa Don't Preach logo",
      bullets: [
        "Guided WhatsApp store",
        "Product matching by occasion & style",
        "High-value order journeys",
      ],
      tags: ["Luxury", "Commerce", "Guided Store"],
    },
    {
      title: "Imagine",
      result: "83% campaign conversion • 800+ users completed the game",
      meta: "Retail • Apple Premium Partner",
      detail:
        "One of India’s largest Apple Premium Partners. We ran a 7-day gamified WhatsApp campaign, turning daily trivia into in-store incentives for iPhone 17 buyers.",
      logo: imagineLogo,
      alt: "Imagine logo",
      bullets: [
        "7-day gamified campaign",
        "Daily trivia with incentives",
        "Store footfall for iPhone 17",
      ],
      tags: ["Retail", "Gamified", "iPhone 17"],
    },
    {
      title: "Schbang CSAT",
      result: "Real-time insights enabling continuous improvement",
      meta: "Internal CSAT Tool",
      detail:
        "Internal WhatsApp-based CSAT tool capturing quick client feedback. We designed a 2-minute form that makes feedback effortless and actionable.",
      logo: schbangLogo,
      alt: "Schbang logo",
      bullets: [
        "2-minute WhatsApp form",
        "Effortless feedback capture",
        "Actionable, real-time insights",
      ],
      tags: ["Internal", "CSAT", "Automation"],
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(
      () => setActive((prev) => (prev + 1) % cases.length),
      3000
    );
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [paused, cases.length]);

  // Progress animation
  useEffect(() => {
    setProgress(0);
    if (paused) return;

    let start: number | null = null;
    let raf: number;
    const duration = 3000;
    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = Math.min(duration, t - start);
      setProgress(Math.round((elapsed / duration) * 100));
      if (elapsed < duration && !paused) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  return (
    <section
      id="case-studies"
      className="pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16"
      style={{ backgroundColor: "#F4F4F4", fontFamily: "Sora" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER BLOCK */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "Sora",
            }}
            className="text-[20px] leading-[100%] tracking-[0.01em] font-bold md:text-6xl md:tracking-tight text-black"
          >
            Work We Are Proud Of
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6"
            style={{
              fontSize: "clamp(0.9rem, 1.2vw + 0.3rem, 1rem)",
              color: "#90998c", // updated
            }}
          >
            Real brands. Real impact. Conversations that drive measurable results.
          </p>
        </div>

        {/* REST OF YOUR COMPONENT (unchanged) */}
        <div
          className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(280px,380px),1fr] gap-4 sm:gap-6 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* LEFT TABS */}
          <div
            className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-white overflow-hidden h-full self-stretch grid min-h-[450px] sm:min-h-[520px] md:min-h-[560px]"
            style={{
              gridTemplateRows: `repeat(${cases.length}, minmax(0, 1fr))`,
            }}
          >
            {cases.map((c, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`relative w-full h-full text-left pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-6 flex items-center border-b border-neutral-200 last:border-b-0 transition-colors ${isActive
                    ? "bg-gradient-to-r from-whatsapp/10 to-transparent"
                    : "hover:bg-neutral-50"
                    }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 sm:w-1.5 ${isActive ? "bg-whatsapp" : "bg-transparent"
                      }`}
                  />
                  <div
                    className={`font-semibold leading-snug w-full ${isActive ? "text-neutral-900" : "text-neutral-700"
                      }`}
                    style={{
                      fontSize: "clamp(0.9rem, 1.2vw + 0.2rem, 1rem)",
                    }}
                  >
                    {c.title}
                  </div>

                  {isActive && (
                    <div className="pointer-events-none absolute left-2 right-2 bottom-1 h-1">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-whatsapp to-emerald-400"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL */}
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-6 lg:p-8 overflow-hidden flex flex-col justify-center min-h-[450px] sm:min-h-[520px] md:min-h-[560px]">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div
                className="text-neutral-500"
                style={{ fontSize: "clamp(0.8rem, 1vw + 0.2rem, 0.875rem)" }}
              >
                Case #{active + 1}
              </div>

              <img
                src={(cases[active] as any).logo}
                alt={(cases[active] as any).alt}
                style={{ height: "clamp(3.5rem, 5vw, 5rem)" }}
                className="w-auto object-contain ml-auto drop-shadow"
              />
            </div>

            <h3
              className="font-semibold text-neutral-900 mb-2"
              style={{ fontSize: "clamp(1.25rem, 2vw + 0.3rem, 1.5rem)" }}
            >
              {cases[active].title}
            </h3>

            <div
              className="text-neutral-700 mb-3 sm:mb-4 max-w-2xl"
              style={{ fontSize: "clamp(0.9rem, 1.2vw + 0.2rem, 1rem)" }}
            >
              {cases[active].detail}
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 sm:mb-4">
              {cases[active].bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-neutral-700"
                  style={{ fontSize: "clamp(0.85rem, 1vw + 0.2rem, 0.875rem)" }}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-whatsapp" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-whatsapp/10 text-whatsapp font-medium"
                style={{ fontSize: "clamp(0.75rem, 1vw + 0.2rem, 0.875rem)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" />
                <span>{cases[active].result}</span>
              </span>

              {cases[active].tags.map((t) => (
                <span
                  key={t}
                  className="px-2 sm:px-3 py-1 rounded-full border border-neutral-200 text-neutral-700"
                  style={{ fontSize: "clamp(0.75rem, 1vw + 0.2rem, 0.875rem)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
