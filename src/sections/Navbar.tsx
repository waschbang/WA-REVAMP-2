import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import walogo from "@/assets/logo/walogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Lifecycle", href: "#lifecycle" },
    { name: "Work", href: "#work" },
    { name: "Partnerships", href: "#partnerships" },
  ];

  const secondaryItems = [
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "https://calendly.com/wa-schbang/new-meeting" },
  ];

  return (
    <>
      {/* Main Navbar - Shows on scroll up, not sticky on mobile */}
      <nav
        className={`md:fixed md:top-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full bg-white/20 backdrop-blur-2xl border-b border-white/30 transition-transform duration-300 ${isVisible ? "md:translate-y-0" : "md:-translate-y-full"
          }`}
        style={{ height: "85px" }}
      >
        <div className="w-full h-full max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <a href="#hero" className="flex items-center gap-2">
              <img src={walogo} alt="Schbang logo" className="w-auto h-8" />
              <img
                src="/schbangLogo.png"
                alt="Schbang wordmark"
                className="h-5 md:h-6 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - All Links on Right */}
          <div className="hidden lg:flex items-center gap-8">
            {[...navItems, ...secondaryItems].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Contact Us" ? "_blank" : "_self"}
                rel={item.name === "Contact Us" ? "noopener noreferrer" : ""}
                className="text-black hover:text-green-600 font-medium text-base transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-transparent"
                >
                  <span className="sr-only">Menu</span>
                  <div className="flex flex-col gap-1.5">
                    <div className="w-6 h-0.5 bg-black"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                  </div>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] p-6 bg-white"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="flex items-center gap-2">
                      <img src={walogo} alt="Logo" className="h-8" />
                      <img
                        src="/schbangLogo.png"
                        alt="Schbang wordmark"
                        className="h-5 w-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    {[...navItems, ...secondaryItems].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-neutral-800 hover:text-green-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
