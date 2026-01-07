"use client";

import React from "react";

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
        {/* Card - Responsive with better mobile styling */}
        <div
          className="relative w-full flex flex-col items-center justify-center text-center"
          style={{
            width: "100%",
            maxWidth: "clamp(320px, 90vw, 1200px)",
            backgroundColor: "#4ECC5E",
            borderRadius: "clamp(24px, 6vw, 48px)",
            padding: "clamp(32px, 8vw, 80px) clamp(24px, 6vw, 64px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(78, 204, 94, 0.2)",
            position: "relative",
            overflow: "hidden",
            minHeight: "clamp(280px, 60vh, 500px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 32px)"
          }}
        >
          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          {/* Hashtag Icon */}
          <div
            style={{
              fontSize: "clamp(48px, 10vw, 120px)",
              fontWeight: 700,
              color: "white",
              textShadow: "0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)",
              lineHeight: "1",
              fontFamily: "'Sora', sans-serif",
              marginBottom: "clamp(8px, 2vw, 16px)"
            }}
          >
            #
          </div>

          {/* Text */}
          <h2
            className="text-white"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(20px, 5vw, 42px)",
              lineHeight: "1.3",
              letterSpacing: "-0.02em",
              color: "white",
              textShadow: "0 2px 15px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 255, 255, 0.3)",
              maxWidth: "100%",
              margin: 0,
              padding: "0 clamp(8px, 2vw, 16px)"
            }}
          >
            Ready to give your team a Second Brain?
          </h2>

          {/* Button */}
          <button
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              padding: "clamp(14px, 3vw, 18px) clamp(40px, 8vw, 56px)",
              borderRadius: "clamp(12px, 2.5vw, 16px)",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(14px, 3vw, 18px)",
              letterSpacing: "0.01em",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              minWidth: "clamp(140px, 30vw, 180px)",
              marginTop: "clamp(8px, 2vw, 16px)"
            }}
            onClick={() => {
              window.location.href = "https://calendly.com/wa-schbang/new-meeting";
            }}
          >
            {/* Hover effect */}
            <span
              className="absolute inset-0 bg-gray-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
              style={{ borderRadius: "clamp(12px, 2.5vw, 16px)" }}
            />
            <span className="relative z-10">Try It Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
