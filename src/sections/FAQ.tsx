import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can we launch?",
      answer: "Most campaigns go live within one week.",
    },
    {
      question: "Do you create campaign content?",
      answer: "Yes, all messaging is crafted to fit your brand’s voice perfectly.",
    },
    {
      question: "Can you integrate with my CRM or website?",
      answer: "Absolutely, we handle all technical integrations.",
    },
    {
      question: "Is customer data secure?",
      answer: "We prioritize robust security and compliance at every stage.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full bg-[#F4F4F4] py-24 md:py-32 lg:py-44 rounded-b-[40px]"
      style={{ boxShadow: "0 32px 0 #F4F4F4", fontFamily: "Sora" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* LEFT SIDE: TITLE + SUBTEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="section-header leading-tight mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span className="block">Frequently Asked</span>
              <span className="block mt-1 text-whatsapp">Questions</span>
            </h2>

            <p
              className="text-base md:text-xl leading-relaxed max-w-lg mt-2 mx-auto lg:mx-0"
              style={{ color: "#90998c" }}
            >
              <span className="whitespace-nowrap">
                Everything you need to know about <br />our WhatsApp marketing
              </span>
              <br />
              services.
            </p>
          </div>

          {/* RIGHT SIDE: FAQ ACCORDION */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-4 rounded-2xl border border-neutral-300/60 bg-[rgba(0,0,0,0.02)] backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-whatsapp px-6 py-4 no-underline hover:no-underline focus-visible:outline-none">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 px-6 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
