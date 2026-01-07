"use client";

import Marquee from "react-fast-marquee";
import { Card } from "@/ui/card";

// Import partner logos
import metaLogo from "@/assets/META.png";
import aisensyLogo from "@/assets/AISENSY.png";
import razorLogo from "@/assets/RAZOR.png";
import simplsoLogo from "@/assets/SIMPLSO.png";
import cloudLogo from "@/assets/CLOUD.png";

const HowItWorksNew = () => {
    const videoSrc =
        "https://www.youtube.com/embed/7cwr7ZakB_k?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=7cwr7ZakB_k";

    // Partners data with image logos
    const partners = [
        { name: "Meta", src: metaLogo },
        { name: "AiSensy", src: aisensyLogo },
        { name: "Razorpay", src: razorLogo },
        { name: "SimplSo", src: simplsoLogo },
        { name: "Google Cloud", src: cloudLogo },
    ];

    return (
        <section
            id="partnerships"
            className="flex flex-col items-center justify-center py-8 md:py-12 px-4"
            style={{ backgroundColor: "#ffffff" }}
        >
            {/* Heading */}
            <h2 className="section-header text-center mb-10 md:mb-14">
                How Does it Work
            </h2>

            {/* Video Container - Centered */}
            <div className="w-full max-w-[1000px] mb-16 md:mb-20">
                <Card
                    className="overflow-hidden rounded-[24px] md:rounded-[32px]"
                    style={{
                        backgroundColor: "#e0e0e0",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <div className="relative w-full pt-[56.25%] bg-[#d9d9d9]">
                        <iframe
                            className="absolute inset-0 w-full h-full rounded-[24px] md:rounded-[32px]"
                            src={videoSrc}
                            title="WhatsApp explainer video"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </Card>
            </div>

            {/* Partners Section */}
            <div className="w-full flex flex-col items-center">
                <h3
                    className="font-sora text-center text-black mb-8"
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "normal",
                        letterSpacing: "0",
                    }}
                >
                    Our Partners
                </h3>

                {/* Partners Carousel - Desktop & Mobile */}
                <Marquee
                    speed={40}
                    gradient={false}
                    autoFill
                    className="py-1 w-full"
                >
                    {[metaLogo, aisensyLogo, razorLogo, simplsoLogo, cloudLogo].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="partner logo"
                            className="w-auto object-contain mx-4 sm:mx-8 lg:mx-14"
                            style={{
                                height:
                                    idx === 4
                                        ? "clamp(6rem, 10vw, 5rem)"   // CLOUD - bigger
                                        : idx === 3
                                            ? "clamp(1.2rem, 2.5vw, 2.2rem)" // SIMPLSO - even smaller
                                            : idx === 0
                                                ? "clamp(3rem, 6vw, 4.5rem)" // META - bigger
                                                : "clamp(2.5rem, 5vw, 4rem)",  // AISENSY, RAZOR - default
                            }}
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default HowItWorksNew;
