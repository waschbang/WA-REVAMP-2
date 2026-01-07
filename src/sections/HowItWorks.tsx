"use client";

import Marquee from "react-fast-marquee";
import { Card } from "@/ui/card";

import waImg from "@/assets/WA_IMG.png";
import img95 from "@/assets/95.png";
import uniImg from "@/assets/UNI.png";

import pdp from "@/assets/pdp.png";
import imagine from "@/assets/Imagine logo.png";
import skillhouse from "@/assets/skillhouse.png";
import schbang from "@/assets/Schbang Logo_Main.png";
import level from "@/assets/levellogo.png";

const BentoOverviewSection = () => {
  const videoSrc =
    "https://www.youtube.com/embed/Cpvd4yOePWM?autoplay=1&mute=1&playsinline=1&rel=0";

  return (
    <section
      id="overview"
      className="flex items-center justify-center"
      style={{ backgroundColor: "#f0ffe9" }}
    >
      {/* ====== DESKTOP / LARGE SCREENS (unchanged view) ====== */}
      <div
        className="hidden lg:flex flex-col items-center justify-center"
        style={{ width: "1441px", height: "980px" }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Sora",
          }}
          className="text-[20px] leading-[100%] tracking-[0.01em] font-bold md:text-6xl md:tracking-tight text-black mb-6"
        >
          How it works
        </h2>

        {/* Inner container 1281 x 807 */}
        <div
          style={{
            width: "1281px",
            height: "807px",
            position: "relative",
          }}
        >
          {/* YouTube video - top left - 839 x 513 */}
          <Card
            className="overflow-hidden whatsapp-shadow"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "839px",
              height: "513px",
              borderRadius: "16px",
            }}
          >
            <div className="relative w-full h-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                title="WhatsApp explainer video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Card>

          {/* 95.png - to the right of video - 411 x 363 */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "869px",
              width: "411px",
              height: "363px",
            }}
          >
            <img
              src={img95}
              alt="95"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Marquee inside curved container */}
          <div
            style={{
              position: "absolute",
              top: "544px",
              left: 0,
              width: "439px",
              height: "264px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",

              backgroundColor: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover
              autoFill
              className="w-full"
            >
              {[pdp, imagine, skillhouse, schbang, level].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="client logo"
                  className="w-auto object-contain mx-10"
                  style={{
                    height:
                      idx === 0 || idx === 2
                        ? "clamp(3rem, 4vw, 4.4rem)"
                        : "clamp(1.9rem, 2.8vw, 3rem)",
                  }}
                />
              ))}
            </Marquee>
          </div>

          {/* WA_IMG - bottom center - 370 x 264 */}
          <div
            style={{
              position: "absolute",
              top: "544px",
              left: "469px",
              width: "370px",
              height: "264px",
            }}
          >
            <img
              src={waImg}
              alt="WA"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* UNI.png - bottom right - 411 x 414 */}
          <div
            style={{
              position: "absolute",
              top: "393px",
              left: "869px",
              width: "411px",
              height: "414px",
            }}
          >
            <img
              src={uniImg}
              alt="UNI"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* ====== MOBILE / TABLET VIEW (new, responsive) ====== */}
      <div className="flex lg:hidden w-full flex-col items-center px-4 py-10">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Sora",
          }}
          className="text-[20px] leading-[100%] tracking-[0.01em] font-bold md:text-6xl md:tracking-tight text-black mb-6 text-center"
        >
          How it works
        </h2>

        {/* Stack content for mobile */}
        <div className="w-full max-w-[640px] flex flex-col gap-6">
          {/* Video */}
          <Card className="overflow-hidden whatsapp-shadow">
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                title="WhatsApp explainer video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Card>

          {/* 95.png */}
          <Card className="overflow-hidden flex items-center justify-center">
            <img
              src={img95}
              alt="95"
              className="w-full h-full object-contain"
            />
          </Card>

          {/* UNI.png */}
          <Card className="overflow-hidden flex items-center justify-center">
            <img
              src={uniImg}
              alt="UNI"
              className="w-full h-full object-contain"
            />
          </Card>

          {/* Marquee logos */}
          <Card className="overflow-hidden flex items-center justify-center border border-[#e5e7eb] shadow-sm">
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover
              autoFill
              className="w-full"
            >
              {[pdp, imagine, skillhouse, schbang, level].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="client logo"
                  className="w-auto object-contain mx-8"
                  style={{
                    height:
                      idx === 0 || idx === 2
                        ? "clamp(2.5rem, 5vw, 3.5rem)"
                        : "clamp(1.6rem, 4vw, 2.6rem)",
                  }}
                />
              ))}
            </Marquee>
          </Card>

          {/* WA image */}
          <Card className="overflow-hidden flex items-center justify-center">
            <img
              src={waImg}
              alt="WA"
              className="w-full h-full object-contain"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoOverviewSection;
