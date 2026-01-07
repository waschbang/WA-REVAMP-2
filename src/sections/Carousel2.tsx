import { useRef, useEffect, useState } from "react";
import whatsappImage1 from "../assets/whatsapp-images/whatsapp1.png";
import whatsappImage2 from "../assets/whatsapp-images/whatsapp2.png";
import whatsappImage3 from "../assets/whatsapp-images/whatsapp3.png";
import whatsappImage4 from "../assets/whatsapp-images/whatsapp4.png";
import whatsappImage5 from "../assets/whatsapp-images/whatsapp5.png";
import whatsappImage6 from "../assets/whatsapp-images/whatsapp6.png";
import whatsappImage7 from "../assets/whatsapp-images/whatsapp7.png";
const cardData = [
    {
        id: 1,
        tag: "CTWA",
        tagColor: "#4ECC5E99",
        tagTextColor: "#2D2D2D",
        title: "Turn Ad Clicks into\nInstant Conversations",
        description: "Connect Facebook and Google ads directly\nto WhatsApp. Customers land in your chat,\nready to engage and buy. No forms, no friction.",
        bottomBg: "#4ECC5E",
        image: whatsappImage1,
    },
    {
        id: 2,
        tag: "AI Calling",
        tagColor: "#92C5FA",
        tagTextColor: "#2D2D2D",
        title: "Never miss a call or\nrevenue ever Again",
        description: "AI-powered voice calling handles inquiries\n24/7, books appointments, and escalates\nurgent issues. Your team stays focused.",
        bottomBg: "#92C5FA",
        image: whatsappImage2,
    },
    {
        id: 3,
        tag: "Gen AI Bot",
        tagColor: "#FFC5DD99",
        tagTextColor: "#166534",
        title: "Scale Customer Support\nWithout Scaling Headcount",
        description: "Gen AI bots understand context, answer\ncomplex questions, & resolve issues instantly.\nFree your team for human interactions.",
        bottomBg: "#FFC5DD",
        image: whatsappImage3,
    },
    {
        id: 4,
        tag: "Web View",
        tagColor: "#FFE606",
        tagTextColor: "#2D2D2D",
        title: "Create Interactive\nExperiences in WhatsApp",
        description: "Embed booking forms, product galleries,\nand checkout flows inside chat. Customers\nbrowse, select, & complete actions.",
        bottomBg: "#FFE606",
        image: whatsappImage4,
    },
    {
        id: 5,
        tag: "B2B Experience",
        tagColor: "#4ECC5E99",
        tagTextColor: "#2D2D2D",
        title: "Streamline B2B Sales with\nWhatsApp Commerce",
        description: "Let prospects browse catalogs, place orders,\nand track shipments within WhatsApp.\nTurn complex B2B buying into seamless commerce.",
        bottomBg: "#4ECC5E",
        image: whatsappImage5,
    },
    {
        id: 6,
        tag: "Lead Gen",
        tagColor: "#92C5FA",
        tagTextColor: "#2D2D2D",
        title: "Automate Lead Capture\nand Qualification",
        description: "WhatsApp bots capture interest, qualify\nprospects, and nurture leads automatically.\nYou focus on closing deals, not chasing leads.",
        bottomBg: "#92C5FA",
        image: whatsappImage6,
    },
    {
        id: 7,
        tag: "B2C Shopping",
        tagColor: "#FFC5DD99",
        tagTextColor: "#166534",
        title: "Turn Browsers into Buyers\nwith In-Chat Shopping",
        description: "Customers browse products, add to cart,\nand checkout entirely within WhatsApp.\nReduce friction, recover sales, boost conversions.",
        bottomBg: "#FFC5DD",
        image: whatsappImage7,
    },


];

const Carousel2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = containerRef.current.offsetHeight - window.innerHeight;
            if (rect.top <= 0 && rect.top >= -sectionHeight) {
                const progress = Math.abs(rect.top) / sectionHeight;
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cardWidth = isMobile ? 340 : 500;
    const cardHeight = isMobile ? 510 : 636;
    const textContentHeight = isMobile ? 310 : 330;
    const gap = 32;

    const totalCards = cardData.length;
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const leftPadding = isMobile ? (viewportWidth - cardWidth) / 2 : 80;
    const totalWidth = totalCards * cardWidth + (totalCards - 1) * gap;
    const maxTranslate = totalWidth - (viewportWidth - leftPadding);
    const translateX = -scrollProgress * maxTranslate;

    return (
        <section ref={containerRef} style={{ height: `${totalCards * 70}vh`, backgroundColor: "#F4F4F4" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: isMobile ? "32px" : "48px", fontWeight: 700, textAlign: "center", marginBottom: "50px", color: "#171717" }}>
                    Explore WhatsApp in Action
                </h2>

                <div style={{
                    display: "flex",
                    gap: `${gap}px`,
                    paddingLeft: `${leftPadding}px`,
                    transform: `translate3d(${translateX}px, 0, 0)`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                } as React.CSSProperties}>
                    {cardData.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                width: `${cardWidth}px`,
                                height: `${cardHeight}px`,
                                flexShrink: 0,
                                backgroundColor: "#FFFFFF",
                                borderRadius: "24px",
                                border: "1px solid #D4D4D4",
                                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                transform: "translate3d(0, 0, 0)",
                                WebkitTransform: "translate3d(0, 0, 0)",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden",
                                contain: "layout style paint"
                            } as React.CSSProperties}
                        >
                            {/* Top Text Content Area - Fixed height for consistent alignment */}
                            <div style={{ padding: isMobile ? "20px 20px 16px 20px" : "24px 24px 24px 24px", height: `${textContentHeight}px`, overflow: "hidden" }}>
                                <span style={{
                                    backgroundColor: item.tagColor,
                                    color: item.tagTextColor,
                                    padding: "12px 24px",
                                    borderRadius: "40px",
                                    border: "1px solid rgba(0,0,0,0.1)",
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 300,
                                    fontSize: isMobile ? "14px" : "16px",
                                    lineHeight: "1",
                                    display: "inline-block",
                                    marginBottom: isMobile ? "16px" : "24px"
                                }}>
                                    {item.tag}
                                </span>

                                <h3 style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 600,
                                    fontSize: isMobile ? "18px" : "28px",
                                    lineHeight: "1.2",
                                    letterSpacing: "0.01em",
                                    color: "#000",
                                    marginBottom: isMobile ? "10px" : "16px",
                                    maxWidth: "90%",
                                    whiteSpace: "pre-line"
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 300,
                                    fontSize: isMobile ? "13px" : "18px",
                                    color: "#404040",
                                    lineHeight: isMobile ? "1.6" : "1.5",
                                    marginBottom: isMobile ? "12px" : "16px",
                                    maxWidth: "100%",
                                    whiteSpace: "pre-line"
                                }}>
                                    {item.description}
                                </p>

                                <a href="#" style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#053E2B",
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 400,
                                    textDecoration: "none",
                                    fontSize: isMobile ? "14px" : "18px"
                                }}>
                                    Book a Demo
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </a>
                            </div>

                            {/* Bottom Image Area - Fixed for proper fit */}
                            <div style={{
                                flex: "1", // Fills the remaining space of the card
                                backgroundColor: item.bottomBg,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-end", // Aligns phone to the bottom
                                overflow: "hidden",
                                padding: "0 40px" // Side padding so phone doesn't touch card edges
                            }}>
                                <img
                                    src={item.image}
                                    alt="WhatsApp Mockup"
                                    style={{
                                        width: "100%",
                                        height: "90%", // Allows the image to scale within the box
                                        objectFit: "contain",
                                        objectPosition: "bottom", // Ensures the base of the phone stays at the bottom
                                        transform: "translateY(5px)" // Fine-tune the overlap/spacing
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel2;