"use client";

// Import all assets
import greenHash from "@/assets/images/HerosectionImgs/greenHash.png";
import iPhone from "@/assets/images/HerosectionImgs/iPhone.png";
import recordingImage from "@/assets/images/HerosectionImgs/recording.png";
import rightArrow from "@/assets/images/HerosectionImgs/arrowRight.png";
import shoesImage from "@/assets/images/HerosectionImgs/shoes.png";
import bagsCircle from "@/assets/images/HerosectionImgs/bagsCircle.png";
import bags from "@/assets/images/HerosectionImgs/bags.png";
import callIcon from "@/assets/images/HerosectionImgs/call.png";
import mobileCircle from "@/assets/images/HerosectionImgs/mobileCircle.png";
import mobile from "@/assets/images/HerosectionImgs/mobile.png";
import sms from "@/assets/images/HerosectionImgs/sms.png";
// Brand logos
import levelLogo from "@/assets/levellogo.png";
import imagineLogo from "@/assets/Imagine logo.png";
import schbangLogo from "@/assets/Schbang Logo_Main.png";
import skillhouseLogo from "@/assets/skillhouse.png";
import pdpLogo from "@/assets/pdp.png";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[110vh] md:h-[120vh] bg-[#FFFFFF] overflow-hidden flex flex-col">
      {/* Main Hero Content - responsive height */}
      <div className="h-screen flex flex-col pt-[5vh] md:pt-[20vh] px-4 relative bg-gradient-to-b from-[#FFFFFF] via-[#FAFEF5] via-30% via-[#F5FCEB] via-60% to-[#EDF3C9]">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content - Text */}
          <div className="text-center relative z-10">
            <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-gray-900 mb-[1.5vh] leading-snug">
              Turn Chats into 3–5X Conversions
            </h1>
            <p className="text-[clamp(0.75rem,1.5vw,1.125rem)] text-gray-600/90 font-normal max-w-3xl mx-auto leading-loose mb-[3vh]">
              Strategic, automated WhatsApp marketing that helps customers decide
              faster, act sooner, and keep coming back to your brand
            </p>

            {/* Button - with equal spacing from text above */}
            <a
              href="/demo"
              className="group inline-flex items-center border border-[#D9DBE9] gap-2 bg-[#41C752] text-white font-semibold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl text-[clamp(0.875rem,1.2vw,1rem)] overflow-hidden relative"
            >
              {/* Color fill animation from left to right */}
              <span
                className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-lg"
              />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-4px]">Book a Demo</span>
              <img src={rightArrow} alt="right arrow" className="w-[12px] relative z-10 transition-transform duration-300 group-hover:translate-x-[4px]" />
            </a>
          </div>

          {/* Phone Mockup Section - positioned at bottom of container */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[min(320px,26vw)] md:w-[min(380px,24vw)] h-[min(320px,26vw)] md:h-[min(380px,24vw)] bg-gradient-radial from-[#d5ffe5] via-[#f6fff6] to-transparent rounded-full opacity-70 translate-y-[-60px]" />
            </div>
            <div className="relative z-10 w-[65vw] md:w-[min(480px,30vw)] lg:w-[min(560px,28vw)]">
              <img
                src={iPhone}
                alt="iPhone mockup"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
              <img
                src={greenHash}
                alt="WhatsApp hash icon"
                className="absolute inset-0 m-auto w-[15vw] md:w-[min(100px,6vw)] lg:w-[min(120px,5vw)] h-auto drop-shadow-xl -translate-y-8"
                loading="lazy"
              />
              <div
                className="absolute left-[-29%] md:left-[-50%] lg:left-[-70%] top-[5%] md:top-[6%]"
              >
                <div className="relative inline-block">
                  <img
                    src={shoesImage}
                    alt="Featured shoes"
                    className="drop-shadow-2xl w-[24vw] md:w-[18vw] lg:w-[min(320px,17vw)]"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 -translate-y-[30%] translate-x-[20%] w-[20%] h-auto drop-shadow-lg">
                    <img
                      src={bagsCircle}
                      alt="Bags background"
                      className="w-full h-auto"
                    />
                    <img
                      src={bags}
                      alt="Bags"
                      className="absolute inset-0 m-auto w-[55%] h-auto"
                    />
                  </div>
                </div>
                {/* Mobile Circle below Shoes */}
                <div className="hidden lg:block mt-2 relative w-[min(72px,4.5vw)] h-auto mx-auto lg:mr-auto lg:ml-12">
                  <img
                    src={mobileCircle}
                    alt="Mobile circle"
                    className="w-full h-auto"
                  />
                  <img
                    src={mobile}
                    alt="Mobile icon"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto"
                  />
                </div>
              </div>

              <div
                className="absolute right-[-23%] md:right-[-50%] lg:right-[-70%] top-[5%] md:top-[6%]"
              >
                <div className="relative">
                  <img
                    src={recordingImage}
                    alt="Recording interface"
                    className="drop-shadow-2xl w-[24vw] md:w-[18vw] lg:w-[min(380px,20vw)]"
                    loading="lazy"
                  />
                  <img
                    src={callIcon}
                    alt="Call icon"
                    className="absolute -top-1 -right-1 w-[min(50px,3vw)] h-auto drop-shadow-lg"
                  />
                </div>
                {/* SMS icon below Recording */}
                <div className="hidden lg:block mt-20 flex lg:ml-10 translate-x-[0.5rem]">
                  <img
                    src={sms}
                    alt="SMS icon"
                    className="w-[min(90px,5.5vw)] h-auto drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Container - MOBILE ONLY */}
      <div className="md:hidden w-full h-[15vh] bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center px-4 pt-4 relative z-30">
        {/* Text at top - inline on one line */}
        <div className="text-center mb-1 flex items-center justify-center gap-1">
          <span className="text-gray-900 text-sm font-normal" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400 }}>
            We are trusted by
          </span>
          <span className="text-[#54ce63] text-base font-medium" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>
            50+ brands
          </span>
        </div>

        {/* Logo carousel - animated */}
        <div className="w-full flex items-center overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee">
            {/* Set 1 */}
            <img src={levelLogo} alt="Level" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-20 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-20 w-auto object-contain grayscale shrink-0" />
            {/* Set 2 - Duplicate for seamless loop */}
            <img src={levelLogo} alt="Level" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-20 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-20 w-auto object-contain grayscale shrink-0" />
            {/* Set 3 */}
            <img src={levelLogo} alt="Level" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-20 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-20 w-auto object-contain grayscale shrink-0" />
            {/* Set 4 */}
            <img src={levelLogo} alt="Level" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-20 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-20 w-auto object-contain grayscale shrink-0" />
            {/* Set 5 */}
            <img src={levelLogo} alt="Level" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-8 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-20 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-20 w-auto object-contain grayscale shrink-0" />
          </div>
        </div>
      </div>

      {/* Trusted Brands Container - DESKTOP ONLY */}
      <div className="hidden md:flex w-full h-[15vh] bg-white/80 backdrop-blur-sm flex-row items-center justify-start pl-12 lg:pl-16 pr-0 relative z-30">
        {/* Left side - Text */}
        <div className="w-[25%] flex flex-col justify-center items-start text-left">
          <span className="text-gray-900 font-normal" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '24px' }}>
            We are trusted by
          </span>
          <span className="text-[#54ce63] font-medium" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '24px' }}>
            50+ brands
          </span>
        </div>

        {/* Right side - Brand logos carousel */}
        <div className="flex-1 h-full flex items-center overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {/* Set 1 */}
            <img src={levelLogo} alt="Level" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-16 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-28 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-28 w-auto object-contain grayscale shrink-0" />
            {/* Set 2 - Duplicate for seamless loop */}
            <img src={levelLogo} alt="Level" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-16 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-28 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-28 w-auto object-contain grayscale shrink-0" />
            {/* Set 3 */}
            <img src={levelLogo} alt="Level" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-16 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-28 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-28 w-auto object-contain grayscale shrink-0" />
            {/* Set 4 */}
            <img src={levelLogo} alt="Level" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-16 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-28 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-28 w-auto object-contain grayscale shrink-0" />
            {/* Set 5 */}
            <img src={levelLogo} alt="Level" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-16 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-28 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-28 w-auto object-contain grayscale shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
