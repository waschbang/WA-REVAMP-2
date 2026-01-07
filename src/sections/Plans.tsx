"use client";

import React, { useRef, useState, useEffect } from "react";
import foundationIcon from "@/assets/icons/Foundation.svg";
import premiumIcon from "@/assets/icons/Premium.svg";
import scaleIcon from "@/assets/icons/Scale.svg";
import customIcon from "@/assets/icons/Custom.svg";
import greenCheck from "@/assets/icons/GreenCheck.svg";
import checkCircle from "@/assets/icons/Check circle.svg";
import arrowRight from "@/assets/icons/Arrow rigth.png";

const PricingPlans = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Constants
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress: 0 when section hits top, 1 when it leaves
      const start = 0;
      const end = sectionHeight - viewportHeight;
      const progress = Math.min(Math.max((0 - rect.top) / end, 0), 1);

      // Add a "hold" phase at the end (finish animation at 85%, hold for last 15%)
      const animationProgress = Math.min(progress / 0.85, 1);

      setScrollProgress(animationProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const plans = [
    {
      name: "Foundation",
      tagline: "For Brands that are just starting out",
      price: {
        oneTime: "2L–2.5L setup",
        monthly: "50K retainer",
        adSpend: "—",
      },
      description:
        "Perfect for brands setting up WhatsApp performance for the first time.",
      features: [
        "Campaign setup & onboarding",
        "1-2 Journeys + broadcast/ month",
        "Compliance & sender setup",
        "Basic analytics dashboard",
      ],
      popular: false,
    },
    {
      name: "Growth",
      tagline: "For scaling campaigns across journeys",
      price: {
        oneTime: "Custom",
        monthly: "50K retainer",
        adSpend: "As needed",
      },
      description:
        "Built for brands ready to scale performance with multi-journey automation.",
      features: [
        "Advanced automations",
        "Monthly optimisation + A/B tests",
        "Playbooks & content operations",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Scale",
      tagline: "High volume campaigns with AD amplification",
      price: {
        oneTime: "Custom",
        monthly: "50K retainer",
        adSpend: "5L+ recommended",
      },
      description:
        "Best for high-frequency, high-volume performance and experimentation.",
      features: [
        "High frequency sends & journeys",
        "Custom dashboard & reporting",
        "Ad amplification strategy",
        "Dedicated strategist",
      ],
      popular: false,
    },
    {
      name: "Custom",
      tagline: "Bespoke strategy crafted for your exact needs",
      price: { oneTime: "Custom", monthly: "Custom monthly retainer", adSpend: "Custom" },
      description:
        "A fully tailored engagement designed around your goals, timelines and performance.",
      features: [
        "Tailored scope & deliverables",
        "Dedicated execution team",
        "Flexible billing",
        "SLA-based support",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`relative md:py-20 bg-[#053E2B] ${isMobile ? "h-[400vh]" : "py-16"}`}
    >
      <div className={`container mx-auto px-4 sm:px-6 ${isMobile ? "sticky top-0 h-screen flex flex-col justify-start pt-[10vh] overflow-hidden" : ""}`}>
        {/* HEADER */}
        <div className="text-center mb-4 md:mb-12 text-white flex-shrink-0">
          <h2
            className="font-sora text-center"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              color: "white",
              fontSize: "clamp(32px, 8vw, 48px)",
              lineHeight: "1.2",
              letterSpacing: "0.01em",
              marginBottom: isMobile ? "0" : "initial"
            }}
          >
            Flexible plans & Pricing
          </h2>
        </div>

        {/* GRID / MOBILE SCROLL */}
        <div
          className="flex md:grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-[1320px] mx-auto md:justify-items-center w-full"
          style={{
            transform: isMobile ? `translate3d(calc(-${scrollProgress * 3} * (100vw - 16px)), 0, 0)` : 'none',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            width: isMobile ? '100%' : 'auto'
          } as React.CSSProperties}
        >
          {plans.map((plan, index) => {
            const isPremium = plan.name === "Growth";
            const oneTimeLabel =
              plan.price.oneTime === "2L–2.5L setup"
                ? "₹2–2.5 Lakhs"
                : plan.price.oneTime === "Custom"
                  ? "₹Custom Setup"
                  : plan.price.oneTime;
            const monthlyLabel =
              plan.price.monthly === "Custom monthly retainer"
                ? "+ Custom monthly retainer"
                : `+ ${plan.price.monthly}`;
            const adSpendLabel =
              plan.price.adSpend === "—"
                ? "+ No fixed ad spend"
                : `+ Ad spend: ${plan.price.adSpend}`;
            const iconMap: Record<string, string> = {
              Foundation: foundationIcon,
              Growth: premiumIcon,
              Scale: scaleIcon,
              Custom: customIcon,
            };

            return (
              <div
                key={index}
                className={`relative rounded-[20px] border border-white/5 flex-shrink-0 w-full md:w-full ${isPremium
                  ? "text-white"
                  : "bg-white text-gray-800"
                  }`}
                style={{
                  maxWidth: "100%",
                  width: isMobile ? "calc(100vw - 32px)" : "308px",
                  height: isMobile ? "auto" : "794px",
                  minHeight: isMobile ? "auto" : "794px",
                  padding: isMobile ? "16px" : "24px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundColor: isPremium ? "#1a9432" : "white",
                  backgroundImage: isPremium
                    ? "linear-gradient(180deg, #4fd96a 0%, #3cc957 20%, #2cb849 40%, #22a73d 60%, #1a9432 80%, #1a9432 100%)"
                    : "none",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.05)",
                  transform: "translateY(0) perspective(1000px) rotateX(0.5deg)",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                }}
              >
                {/* Most Popular Badge for Growth */}
                {isPremium && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "linear-gradient(180deg, #dcd7d7ff 0%, #FFFFFF 100%)",
                      color: "#000000",
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                      padding: "10px 12px",
                      borderRadius: "200px",
                      boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                      lineHeight: "1",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div style={{ marginBottom: isMobile ? "10px" : "16px" }}>
                  <img
                    src={iconMap[plan.name]}
                    alt={`${plan.name} icon`}
                    style={{
                      width: isMobile ? "32px" : "40px",
                      height: isMobile ? "32px" : "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Plan Name & Tagline */}
                <div style={{ marginBottom: "8px" }}>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "20px" : "24px",
                      marginBottom: "4px",
                      color: isPremium ? "white" : "#081b14",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: isMobile ? "12px" : "14px",
                      lineHeight: "1.4",
                      minHeight: isMobile ? "auto" : "40px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#4b5563",
                    }}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing */}
                <div style={{ marginBottom: isMobile ? "16px" : "50px" }}>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "20px" : "24px",
                      color: isPremium ? "white" : "#053E2B",
                    }}
                  >
                    {oneTimeLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      marginTop: "4px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                  >
                    {monthlyLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                  >
                    {adSpendLabel}
                  </p>
                </div>

                {/* CTA Button */}
                <div style={{ marginBottom: isMobile ? "16px" : "40px", display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://calendly.com/wa-schbang/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="group relative overflow-hidden"
                      style={{
                        width: "auto",
                        padding: isMobile ? "10px 30px" : "14px 55px",
                        height: isMobile ? "40px" : "52px",
                        borderRadius: "12px",
                        border: "1px solid #E7E8F1",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: 600,
                        fontSize: isMobile ? "13px" : "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      {/* Color fill animation from left to right */}
                      <span
                        className="absolute inset-0 bg-gray-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                        style={{ borderRadius: "12px" }}
                      />
                      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-4px]">{isPremium ? "Book a Demo" : "Get a Quote"}</span>
                      <img src={arrowRight} alt="arrow" className="relative z-10 transition-transform duration-300 group-hover:translate-x-[4px]" style={{ width: "14px", height: "14px" }} />
                    </button>
                  </a>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: isPremium ? "rgba(255,255,255,0.3)" : "#e2e8f0",
                    marginBottom: isMobile ? "12px" : "20px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: "1.5",
                    marginBottom: isMobile ? "16px" : "50px",
                    minHeight: isMobile ? "auto" : "50px",
                    color: isPremium ? "rgba(255,255,255,0.9)" : "#374151",
                  }}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: isMobile ? "8px" : "20px",
                      }}
                    >
                      <img
                        src={isPremium ? checkCircle : greenCheck}
                        alt="check"
                        style={{
                          width: "18px",
                          height: "18px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 400,
                          fontSize: isMobile ? "14px" : "16px",
                          lineHeight: "1.4",
                          color: isPremium ? "rgba(255,255,255,0.9)" : "#374151",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
