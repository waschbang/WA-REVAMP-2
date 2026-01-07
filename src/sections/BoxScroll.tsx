"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

// --- Assets ---
import aiCallingVideo from "@/assets/vids/AI Calling 2.mov";
import chatflowVideo from "@/assets/vids/Chatbot Video 2.mov";
import webViewVideo from "@/assets/vids/Web view 2.mov";
import ctwaVideo from "@/assets/vids/CTWA Video 2.mov";
import commerceVideo from "@/assets/vids/WA Commerce Video 2.mov";
import campaignsVideo from "@/assets/vids/WA Campaign 2.mov";
import crmVideo from "@/assets/vids/CRM Video from WA Videos.mov";

const VIDEOS = [
  aiCallingVideo,
  chatflowVideo,
  webViewVideo,
  ctwaVideo,
  commerceVideo,
  campaignsVideo,
  crmVideo,
];

const BOX_COLORS = ["#4ECC5E", "#92C5FA", "#FFC7DE", "#FFE606"];

const TAG_BG_COLORS = [
  "#73e081",
  "#a6d0fc",
  "#ffcfe3",
  "#ffee52",
  "#73e081",
  "#a6d0fc",
  "#ffcfe3",
];

const BOX_CONTENT = [
  {
    title: "AI Calling",
    body: "Voice-based follow-ups, reminders, and conversions.",
    tags: ["Guidance", "Product Discovery"],
  },
  {
    title: "AI Chatflows",
    body: "Automated Conversational journeys for Lead Gen, Support, Commerce.",
    tags: ["Payment Recovery", "Lead Warning"],
  },
  {
    title: "Web View",
    body: "Create App like Experiences inside WhatsApp.",
    tags: ["Webview", "UX"],
  },
  {
    title: "Click to WhatsApp Ads",
    body: "Convert ad clicks directly into WhatsApp conversations with pre-filled journeys and tracking.",
    tags: ["D2C", "Real Estate", "EdTech"],
  },
  {
    title: "WhatsApp Commerce",
    body: "Enable Seamless Shopping Directly inside chat.",
    tags: ["D2C Purchases", "UPI Flows", "Shipping Updates"],
  },
  {
    title: "Campaign & Broadcasts",
    body: "Drive Engagement & Revenue with Personalised Messages.",
    tags: ["Sales", "Nudges", "Offers"],
  },
  {
    title: "CRM & Data Automation",
    body: "Sync Conversations, automate journeys & track funnels.",
    tags: ["Reporting", "Reactivation"],
  },
];

// --- Helper Components ---

const CardImageSlideshow: React.FC<{ activeIndex: number }> = ({
  activeIndex,
}) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise?.catch) {
          playPromise.catch(() => null);
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-gray-900">
      {VIDEOS.map((src, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;
        const isNext = index === activeIndex + 1;

        let translateY = "100%";
        let opacity = 0;
        let scale = 1;

        if (isPast) {
          translateY = "-100%";
          opacity = 0;
          scale = 0.95;
        } else if (isActive) {
          translateY = "0%";
          opacity = 1;
          scale = 1;
        } else if (isNext) {
          translateY = "100%";
          opacity = 0;
          scale = 1.05;
        }

        return (

          <video
            key={`${src}-${index}`}
            ref={(node) => {
              videoRefs.current[index] = node;
            }}
            className="absolute inset-0 w-full h-full block"
            style={{
              objectFit: "fill",
              backgroundColor: "#000000",
              transform: `translateY(${translateY}) scale(${scale})`,
              zIndex: index,
              transition:
                "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
              opacity,
              willChange: "transform, opacity",
            }}
            src={src}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
          />
        );
      })}
    </div>
  );
};

const MobileStackBox: React.FC<{
  index: number;
  stackProgress: number;
  totalSteps: number;
}> = ({ index, stackProgress, totalSteps }) => {
  const content = BOX_CONTENT[index];
  const backgroundColor = BOX_COLORS[index % BOX_COLORS.length];
  const tagBackground = TAG_BG_COLORS[index] ?? "#ffffff";

  // Animation logic
  const realIndex = stackProgress * totalSteps;

  // Shift entrance so index 0 also animates in
  const enterStart = index;
  const enterEnd = index + 0.6;

  // Entrance progress (0 -> 1)
  let localProgress = 0;
  if (realIndex > enterStart) {
    const rawP = (realIndex - enterStart) / (enterEnd - enterStart);
    localProgress = Math.max(0, Math.min(1, rawP));
  }

  // Shrink (Square -> Stacked)
  // Happens as the NEXT box enters
  const nextEnterStart = index + 1;
  const nextEnterEnd = index + 1.6;

  let shrinkProgress = 0;
  if (realIndex > nextEnterStart) {
    const rawS = (realIndex - nextEnterStart) / (nextEnterEnd - nextEnterStart);
    shrinkProgress = Math.max(0, Math.min(1, rawS));
  }

  // Dimensions - smaller cards on mobile
  const expandedHeight = 160;
  const collapsedHeight = 38;
  const currentHeight =
    expandedHeight - shrinkProgress * (expandedHeight - collapsedHeight);

  // Stacking offset (Stack totally on top of each other)
  const topOffset = 0;

  // Body Animation: Fade out and collapse height
  const bodyOpacity = Math.max(0, 1 - shrinkProgress * 3);
  const bodyMaxHeight = 100 * (1 - shrinkProgress);
  const bodyMargin = 20 * (1 - shrinkProgress);

  // Entrance Transform
  const translateY = (1 - localProgress) * 60;
  const scale = 0.9 + 0.1 * localProgress;

  return (
    <div
      className="absolute left-4 right-4 shadow-xl  rounded-[16px] px-5 py-4 flex flex-col justify-center overflow-hidden gpu-layer"
      style={{
        backgroundColor,
        top: `${topOffset}px`,
        height: `${currentHeight}px`,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        opacity: localProgress,
        zIndex: 50 + index,
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transition: "height 0.25s ease-out, opacity 0.25s ease-out, transform 0.25s ease-out",
        contain: "layout style paint",
      }}
    >
      {/* Header (First) - stays visible */}
      <div className="text-base font-bold  text-gray-900 leading-tight text-center mb-2">
        {content.title}
      </div>

      {/* Body Text (Second) - Fades out & collapses */}
      <div
        className="text-xs leading-relaxed text-[#333333] font-medium overflow-hidden text-center"
        style={{
          opacity: bodyOpacity,
          maxHeight: `${bodyMaxHeight}px`,
        }}
      >
        {content.body}
      </div>

      {/* Tags - Fades out with body */}
      <div
        className="flex flex-wrap justify-center gap-1.5 mt-2"
        style={{
          opacity: bodyOpacity,
        }}
      >
        {content.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium border border-slate-900/10 bg-white/50"
            style={{ backgroundColor: tagBackground }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const StackBox: React.FC<{
  index: number;
  side: "left" | "right";
  progress: number;
  totalSteps: number;
  stepIndex: number;
}> = ({ index, side, progress, totalSteps, stepIndex }) => {
  const isLeft = side === "left";
  const backgroundColor = BOX_COLORS[index % BOX_COLORS.length];
  const contentIndex = isLeft ? index : 4 + index;
  const content = BOX_CONTENT[contentIndex] ?? BOX_CONTENT[0];
  const tagBackground = TAG_BG_COLORS[contentIndex] ?? "#ffffff";
  const isWhatsAppCommerce = contentIndex === 4;
  const isClickToWhatsAppAds = contentIndex === 3;

  // --- Animation Timing ---
  const stepSize = 1 / totalSteps;
  const myStart = stepIndex * stepSize;
  const myEnd = myStart + stepSize;

  const entryProgress = (progress - myStart) / stepSize;
  const clampedEntry = Math.max(0, Math.min(1, entryProgress));

  const nextStepStart = myEnd;
  const stackProgress = (progress - nextStepStart) / stepSize;
  const clampedStack = Math.max(0, Math.min(1, stackProgress));

  // --- Visual Properties ---
  // Use smoother easing function for card entrance
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  const startOffsetY = 200;
  const translateY = startOffsetY * (1 - easeOutQuart(clampedEntry));
  const opacity = Math.max(0, Math.min(1, clampedEntry * 3));

  const initialHeight = 280;
  const stackedHeight = 80;
  const currentHeight =
    initialHeight - clampedStack * (initialHeight - stackedHeight);

  const initialRadius = 24;
  const stackedRadius = 12;
  const currentRadius =
    initialRadius - clampedStack * (initialRadius - stackedRadius);

  const contentOpacity = 1 - Math.pow(clampedStack, 2);

  const GAP_BETWEEN_CARDS = 16;
  const columnBaseStepIndex = isLeft ? 0 : 4;
  const getCurrentHeightForStepIndex = (localStepIndex: number) => {
    const stepSizeLocal = 1 / totalSteps;
    const myStartLocal = localStepIndex * stepSizeLocal;
    const myEndLocal = myStartLocal + stepSizeLocal;
    const nextStepStartLocal = myEndLocal;
    const stackProgressLocal = (progress - nextStepStartLocal) / stepSizeLocal;
    const clampedStackLocal = Math.max(0, Math.min(1, stackProgressLocal));
    return initialHeight - clampedStackLocal * (initialHeight - stackedHeight);
  };

  let baseTop = 0;
  for (let i = 0; i < index; i++) {
    baseTop +=
      getCurrentHeightForStepIndex(columnBaseStepIndex + i) + GAP_BETWEEN_CARDS;
  }

  // Anchor Position - closer to phone
  const anchorStyle = isLeft ? { right: "105%" } : { left: "105%" };

  return (
    <div
      className="absolute w-[240px] md:w-[280px] lg:w-[340px] shadow-xl origin-top gpu-layer"
      style={{
        backgroundColor,
        ...anchorStyle,
        top: baseTop,
        height: currentHeight,
        borderRadius: currentRadius,
        transform: `translate3d(0, ${translateY}px, 0)`,
        opacity: opacity,
        zIndex: 50 + index,
        willChange: "transform, height, opacity",
      }}
    >
      {/* Header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <div className="text-sm md:text-lg font-bold text-gray-900 leading-tight">
          {content.title}
        </div>
      </div>

      {/* Body */}
      <div
        className="absolute top-[75px] left-6 right-6 bottom-6 flex flex-col justify-between overflow-hidden"
        style={{
          opacity: contentOpacity,
          transition: "opacity 0.35s ease-out",
          top: isWhatsAppCommerce ? "68px" : undefined,
          bottom: isWhatsAppCommerce ? "16px" : undefined,
          ...(isClickToWhatsAppAds ? { top: "70px", bottom: "18px" } : null),
        }}
      >
        <p className="text-sm md:text-lg leading-relaxed text-[#333333] font-medium">
          {content.body}
        </p>

        {/* Tags LEFT aligned (justify-start) and bigger padding */}
        <div
          className={
            isClickToWhatsAppAds
              ? "flex flex-nowrap justify-start gap-2 mt-2"
              : "flex flex-wrap justify-start gap-2 mt-2"
          }
        >
          {content.tags.map((tag) => (
            <span
              key={tag}
              // Increased padding (px-4 py-2) and text size (text-xs md:text-sm)
              className={
                isWhatsAppCommerce
                  ? "px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border border-slate-900/10 bg-white/50"
                  : isClickToWhatsAppAds
                    ? "px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium border border-slate-900/10 bg-white/50 whitespace-nowrap"
                    : "px-4 py-2 rounded-full text-xs md:text-sm uppercase tracking-wider font-medium border border-slate-900/10 bg-white/50"
              }
              style={{ backgroundColor: tagBackground }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Sticky Component ---

export default function LifeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rawScrollProgress, setRawScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastProgress = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Very smooth interpolation for consistent animation speed
      const smoothedProgress = lastProgress + (progress - lastProgress) * 0.05;
      lastProgress = smoothedProgress;

      setRawScrollProgress(smoothedProgress);
      setIsMobile(window.innerWidth < 768);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // --- Animation Phasing Logic ---
  const INTRO_THRESHOLD = 0.2;

  const introProgress = Math.min(1, rawScrollProgress / INTRO_THRESHOLD);
  const stackProgress = Math.max(
    0,
    (rawScrollProgress - INTRO_THRESHOLD) / (1 - INTRO_THRESHOLD)
  );

  // --- 1. Header Animation (Intro Phase) ---
  const headerScale = 1 - introProgress * 0.4;
  const headerOpacity = 1 - introProgress * 1.5;
  const headerY = introProgress * 150;

  // --- 2. Card Entrance Animation (Intro Phase) ---
  const cardStartY = isMobile ? 18 : 50;
  const cardY = cardStartY * (1 - introProgress);

  // --- 3. Box Animation (Stack Phase) ---
  const totalBoxes = 7;
  const rawStepPosition = Math.min(
    totalBoxes - Number.EPSILON,
    stackProgress * totalBoxes
  );
  const activeBoxIndex = Math.floor(rawStepPosition);
  const currentStepProgress = rawStepPosition - activeBoxIndex;

  // Video switches when the new card has entered enough to be the focus
  // Lower threshold = video changes earlier when new card starts entering
  const VIDEO_SWITCH_THRESHOLD = 0.35;
  let activeVideoIndex = activeBoxIndex;
  // Switch to new video once the card has entered past the threshold
  if (currentStepProgress >= VIDEO_SWITCH_THRESHOLD) {
    activeVideoIndex = activeBoxIndex;
  } else if (activeBoxIndex > 0) {
    activeVideoIndex = activeBoxIndex - 1;
  }
  activeVideoIndex = Math.max(0, Math.min(VIDEOS.length - 1, activeVideoIndex));

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-[#F4F4F4] -mt-20"
      style={{ height: "900vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start md:justify-center md:pt-0 overflow-hidden">
        {/* --- Header Layer --- */}
        <div
          className="absolute top-[5vh] md:top-[14vh] w-full text-center z-10 px-2 md:px-4 origin-center"
          style={{
            opacity: Math.max(0, headerOpacity),
            transform: `scale(${headerScale}) translateY(${headerY}px)`,
            willChange: "transform, opacity",
            fontFamily: "Sora",
            fontWeight: "bold",
          }}
        >
          <h1 className="section-header mb-0 text-[1.25rem] md:text-5xl whitespace-nowrap">
            Everything You Need For Your
          </h1>
          <h1 className="section-header mb-8 text-[1.25rem] md:text-5xl">
            WhatsApp Marketing
          </h1>
        </div>

        {/* --- Main Card Layer (Desktop & Mobile) --- */}
        <div
          className="relative w-[260px] aspect-[1/2] md:w-full md:max-w-[380px] md:aspect-[1/2] md:mt-[2vh] z-20 mx-auto"
          style={{
            marginTop: isMobile ? "calc(-4vh + 35px)" : "calc(2vh + 35px)",
            transform: `translate3d(0, ${cardY}vh, 0)`,
            willChange: "transform",
          }}
        >
          {/* Card Background / Slideshow */}
          <div className="relative w-full h-full rounded-[24px] md:rounded-[45px] shadow-2xl bg-black border-[4px] border-black z-30 overflow-hidden box-border">
            {/* Inner container for screen content - radius matches outer minus border */}
            <div className="relative w-full h-full rounded-[20px] md:rounded-[41px] overflow-hidden bg-black">
              <CardImageSlideshow activeIndex={activeVideoIndex} />
            </div>
          </div>

          {/* --- Boxes Layer (Desktop Only) --- */}
          <div className="hidden md:block absolute inset-0 z-40 pointer-events-none">
            {/* Left Side */}
            {[0, 1, 2, 3].map((i) => (
              <StackBox
                key={`left-${i}`}
                index={i}
                side="left"
                progress={stackProgress}
                totalSteps={totalBoxes}
                stepIndex={i}
              />
            ))}

            {/* Right Side */}
            {[0, 1, 2].map((i) => (
              <StackBox
                key={`right-${i}`}
                index={i}
                side="right"
                progress={stackProgress}
                totalSteps={totalBoxes}
                stepIndex={4 + i}
              />
            ))}
          </div>
        </div>

        {/* --- Mobile Boxes Container (Mobile Only) --- */}
        <div className="block md:hidden relative w-full h-[220px] mt-6 z-20">
          {BOX_CONTENT.map((_, i) => (
            <MobileStackBox
              key={`mobile-${i}`}
              index={i}
              stackProgress={stackProgress}
              totalSteps={totalBoxes}
            />
          ))}
        </div>

        {/* Hint */}
        <div
          className="hidden md:block absolute bottom-8 text-slate-400 text-sm transition-opacity duration-300"
          style={{ opacity: rawScrollProgress > 0.1 ? 0 : 1 }}
        ></div>
      </div>
    </section>
  );
}
