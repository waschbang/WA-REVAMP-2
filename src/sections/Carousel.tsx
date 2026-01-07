import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/ui/carousel";
import { Button } from "@/ui/button";
import ctwaImg from "@/assets/solutionsimg/CTWA.jpg";
import formsImg from "@/assets/solutionsimg/FORMS.jpg";
import paymentsImg from "@/assets/solutionsimg/PAYMENTS.jpg";
import webviewImg from "@/assets/solutionsimg/WEBVIEW.jpg";
import catalogueImg from "@/assets/solutionsimg/CATALOUGE.png";
import aicallImg from "@/assets/solutionsimg/AICALLING.jpg";

interface Offering {
  id: string;
  category: string;
  headline: string;
  body: string;
  cta: string;
  image: string;
  displayTitle?: string;
}

const OFFERINGS: Offering[] = [
  {
    id: "ai-calling",
    category: "AI Calling",
    headline: "Never lose a customer to a missed call again",
    body: "Missed calls mean lost revenue. Your customers reach competitors when you can't answer. We solve this with AI-powered voice that handles calls 24/7.",
    cta: "Book a call to know more!",
    image: aicallImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "gen-ai-bot",
    category: "Gen AI Bot",
    headline: "End the bottleneck of manual customer support",
    body: "Delayed responses frustrate customers and kill conversions. Manual support doesn't scale. We automate routine queries so your team focuses on what matters.",
    cta: "Try the Gen AI Bot",
    image: formsImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "b2c-shopping",
    category: "B2C Shopping",
    headline: "Recover revenue lost to cart abandonment",
    body: "Complicated checkouts and app downloads kill sales. Customers abandon carts when buying feels hard. We bring the entire shopping experience into WhatsApp.",
    cta: "Try the B2C Shopping Demo",
    image: catalogueImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "b2b-experience",
    category: "B2B Experience",
    headline: "Stop your sales team from chasing dead-end leads",
    body: "Your team wastes hours on prospects who won't buy. Qualified leads go cold during scheduling delays. We automate qualification and booking so you only talk to buyers.",
    cta: "Try the B2B Bot",
    image: paymentsImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "ctwa",
    category: "Click-to-WhatsApp (CTWA) Experience",
    headline: "Stop bleeding ad budget on clicks that go nowhere",
    body: "You pay for clicks but lose prospects before conversations start. Most ad traffic disappears without converting. We turn clicks into instant WhatsApp conversations.",
    cta: "Book a Slot to Know More",
    image: ctwaImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "web-view",
    category: "Web View Experience",
    headline: "Stop visitors from leaving before you capture their interest",
    body: "Website visitors bounce silently with no way to re-engage them. Static pages don't capture intent. We create interactive WhatsApp experiences that capture leads before they leave.",
    cta: "Book a Slot to Explore",
    image: webviewImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
  {
    id: "lead-gen",
    category: "Lead Gen Demo",
    headline: "Stop leads from disappearing into your CRM black hole",
    body: "Leads slip through with inconsistent follow-ups. You don't know which channels actually convert. We automate capture, qualification, and nurturing end-to-end.",
    cta: "Try the Lead Gen Demo",
    image: formsImg,
    displayTitle: "Maximize ROI with targeted ad placements",
  },
];

const OfferingsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="offerings" className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative bg-[#rgb(255, 255, 255)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="font-sora text-center text-black"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "1.2",
              letterSpacing: "0.01em",
            }}
          >
            Explore WhatsApp in Action
          </h2>
          <p
            className="text-neutral-600 max-w-3xl mx-auto mt-2 sm:mt-3"
            style={{
              fontSize: "clamp(0.9rem, 1.2vw + 0.3rem, 1rem)",
            }}
          >
            Auto-rotating overview of our core experiences. Skip the scroll—skim
            what's possible at a glance.
          </p>
        </div>

        <div className="relative">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3 sm:-ml-4">
              {OFFERINGS.map((o) => (
                <CarouselItem
                  key={o.id}
                  className="pl-3 sm:pl-4 basis-[85%] sm:basis-[60%] md:basis-1/3 lg:basis-1/3"
                >
                  <div className="group relative flex justify-center">
                    <div
                      className="
                        relative rounded-2xl sm:rounded-3xl
                        border border-white/50
                        bg-neutral-200/25 backdrop-blur-lg
                        premium-shadow-lg overflow-hidden
                        transition-all duration-300 ease-out
                        w-full max-w-[360px] sm:max-w-[414px]
                        min-h-[360px] sm:min-h-[420px]
                        md:w-[414px] md:min-h-[460px]
                        md:group-hover:w-[610px]

                      "
                    >
                      <div className="absolute inset-0">
                        <img
                          src={o.image}
                          alt={o.category}
                          className="w-full h-full object-cover object-left"
                        />
                      </div>

                      {/* ID TAG - unchanged */}
                      <div className="absolute top-3 left-3 z-20">
                        <div
                          className="
                            px-3 py-1 rounded-full
                            border border-[#4dc85c]
                            bg-[#4dc85c1a]
                            backdrop-blur-sm
                            text-[0.65rem] sm:text-xs
                            font-medium uppercase tracking-wide
                            text-[#4dc85c]
                          "
                        >
                          {o.id}
                        </div>
                      </div>

                      {/* TEXT OVERLAY */}
                      <div className="absolute inset-x-0 bottom-0 z-10">
                        <div
                          className="
                            px-4 sm:px-5 pt-3 sm:pt-4 pb-3 sm:pb-4
                            transition-all duration-300
                            bg-gradient-to-t
                            from-black/90 via-black/75 to-transparent
                            sm:from-black/85 sm:via-black/60
                          "
                        >
                          {/* DESKTOP TITLE + HOVER — unchanged */}
                          <div className="hidden md:block">
                            <h3
                              className="font-semibold text-white leading-snug"
                              style={{
                                fontSize:
                                  "clamp(0.95rem, 1.2vw + 0.4rem, 1.15rem)",
                              }}
                            >
                              <div className="relative h-[2.6em] overflow-hidden">
                                <span
                                  className="
                                    absolute inset-x-0 bottom-0
                                    translate-y-0 opacity-100
                                    transition-all duration-300 ease-out
                                    group-hover:-translate-y-2
                                    group-hover:opacity-0
                                  "
                                >
                                  {o.displayTitle ?? o.headline}
                                </span>

                                <span
                                  className="
                                    absolute inset-x-0 bottom-0
                                    translate-y-3 opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0
                                    group-hover:opacity-100
                                  "
                                >
                                  {o.headline}
                                </span>
                              </div>
                            </h3>
                          </div>
                          {/* MOBILE SHADOW OVERLAY */}
                          <div
                            className="
    block md:hidden
    absolute inset-x-0 bottom-0
    h-[120px]        /* height of the shadow */
    bg-gradient-to-t
    from-black/90 via-black/70 to-transparent
    pointer-events-none
  "
                          ></div>

                          {/* DESCRIPTION + CTA (desktop hover only) */}
                          <div
                            className="
                              overflow-hidden
                              max-h-none md:max-h-0
                              transition-all duration-300 ease-out
                              md:group-hover:max-h-40
                            "
                          >
                            <p
                              className="
                                mt-2 text-xs sm:text-sm text-white md:text-neutral-300
                                opacity-100 translate-y-0
                                md:opacity-0 md:translate-y-1
                                md:transition-all md:duration-200 md:ease-out md:delay-100
                                md:group-hover:opacity-100 md:group-hover:translate-y-0
                              "
                            >
                              {o.body}
                            </p>

                            <div
                              className="
                                mt-3 opacity-100 translate-y-0
                                md:opacity-0 md:translate-y-1
                                md:transition-all md:duration-200 md:ease-out md:delay-200
                                md:group-hover:opacity-100 md:group-hover:translate-y-0
                              "
                            >
                              <a
                                href="https://calendly.com/wa-schbang/new-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  className="
                                    rounded-full px-4 sm:px-5
                                    border text-[#4dc85c]
                                    border-[#4dc85c]
                                    bg-[#4dc85c1a]
                                    hover:bg-[#4dc85c26]
                                  "
                                  style={{
                                    height: "2.4rem",
                                    fontSize:
                                      "clamp(0.8rem, 1vw + 0.2rem, 0.9rem)",
                                  }}
                                >
                                  {o.cta}
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex md:-left-6 bg-white/90 z-10 h-8 w-8" />
            <CarouselNext className="hidden md:flex md:-right-6 bg-white/90 z-10 h-8 w-8" />
          </Carousel>

          <div className="flex items-center justify-center gap-3 mt-6">
            {OFFERINGS.map((_, i) => {
              const isActive = i === current;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  className={`
                    rounded-full transition-all duration-200
                    ${isActive ? "h-4 w-4" : "h-3 w-3"}
                    hover:h-5 hover:w-5
                  `}
                  style={{
                    backgroundColor: isActive ? "#00c732" : "#a8efb3",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
