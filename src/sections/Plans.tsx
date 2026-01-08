"use client";

import React from "react";
import waschbangLogo from "@/assets/logo/waschbanglogo.png";
import waschbangRing from "@/assets/waschbangring.png";
import waschbangElement from "@/assets/waschbangelement.png";

const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20"
      style={{
        backgroundColor: "#F4F4F4",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Card - Exact Figma Design with Responsiveness */}
        <div
          className="relative w-full flex flex-col items-center justify-center text-center"
          style={{
            width: "100%",
            maxWidth: "clamp(320px, 90vw, 1318px)",
            backgroundColor: "#4ECB5E",
            borderRadius: "clamp(16px, 3vw, 24px)",
            padding: "clamp(40px, 8vw, 80px) clamp(24px, 5vw, 64px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
            minHeight: "clamp(300px, 50vh, 503px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(20px, 4vw, 32px)"
          }}
        >
          {/* Background Ring - Hidden on mobile */}
          <img
            src={waschbangRing}
            alt=""
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              height: "auto",
              pointerEvents: "none",
              zIndex: 0
            }}
          />

          {/* Logo Container - Element with Logo */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginBottom: "clamp(8px, 2vw, 16px)"
            }}
          >
            {/* Element Background */}
            <img
              src={waschbangElement}
              alt=""
              style={{
                width: "clamp(60px, 12vw, 120px)",
                height: "auto",
                display: "block"
              }}
            />
            {/* Logo on top of Element */}
            <img
              src={waschbangLogo}
              alt="WhatsApp Icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "clamp(32px, 6vw, 64px)",
                height: "auto"
              }}
            />
          </div>

          {/* Text */}
          <h2
            className="text-white"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 4.5vw, 42px)",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              maxWidth: "100%",
              margin: 0,
              padding: "0 clamp(8px, 2vw, 16px)",
              zIndex: 2,
              position: "relative"
            }}
          >
            Ready to give your team a second Brain?
          </h2>

          {/* Button - Exact Figma Specifications */}
          <button
            className="group relative overflow-hidden"
            style={{
              position: "relative",
              zIndex: 2,
              width: "clamp(140px, 30vw, 158px)",
              height: "clamp(44px, 10vw, 48px)",
              padding: "16px 18px",
              borderRadius: "12px",
              background: "linear-gradient(180deg, #0A0A0A 0%, #000000 100%)",
              border: "1px solid #090909",
              color: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0%",
              lineHeight: "100%",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(0, 0, 0, 0.3)",
              marginTop: "clamp(8px, 2vw, 16px)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "inset 0 0 8px rgba(255, 255, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "inset 0 0 6px rgba(255, 255, 255, 0.4)";
            }}
            onClick={() => {
              window.location.href = "https://calendly.com/wa-schbang/new-meeting";
            }}
          >
            {/* White gradient overlay for glossy effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: "12px 12px 0 0",
                pointerEvents: "none",
                zIndex: 1
              }}
            />
            <span style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              Try it Now
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "2px" }}
              >
                <path
                  d="M2 6H10M10 6L6 2M10 6L6 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
