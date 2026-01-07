import new_schbang from "@/assets/logo_new.png";

const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:opacity-80 transition-opacity"
    style={{ color: "#ffffff" }}
  >
    {children}
  </a>
);

const Footer = () => {
  const legal = ["About", "Products", "Privacy", "Terms", "Help"];

  return (
    <footer
      id="footer"
      className="w-full -mt-[2px]"
      style={{ backgroundColor: "#4ecc5e" }}
    >
      <div className=" max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col">
        {/* Centered big image */}
        <div className="flex-1 flex items-center justify-center pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
          <img
            src={new_schbang}
            alt="Schbang Logo Full"
            className="max-w-full h-[60px] sm:h-[80px] lg:h-[330px] object-contain"
          />
        </div>

        {/* Bottom Row */}
        <div className="pb-6 sm:pb-7 border-t border-white pt-1 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-y-0 md:gap-x-4 items-center">
          {/* LEFT SIDE SOCIALS */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <SocialIcon href="https://in.linkedin.com/company/letschbang">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#ffffff" />
                <path d="M8.33854 17.875H5.66146V9.275H8.33854V17.875ZM7 8.12875C6.14245 8.12875 5.44792 7.43356 5.44792 6.57656C5.44792 5.71844 6.14245 5.02438 7 5.02438C7.85755 5.02438 8.55208 5.71844 8.55208 6.57656C8.55208 7.43356 7.85755 8.12875 7 8.12875ZM18.3333 17.875H15.6615V13.6866C15.6615 12.6872 15.6406 11.4031 14.2667 11.4031C12.8729 11.4031 12.6615 12.4909 12.6615 13.6141V17.875H9.98438V9.275H12.5521V10.4519H12.5906C12.9479 9.77406 13.8229 9.05969 15.124 9.05969C17.8333 9.05969 18.3333 10.8419 18.3333 13.1647V17.875Z" fill="#4ecc5e" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/schbang">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" fill="#ffffff" />
                <path d="M12 7.21216C9.35583 7.21216 7.21216 9.35583 7.21216 12C7.21216 14.6442 9.35583 16.7878 12 16.7878C14.6442 16.7878 16.7878 14.6442 16.7878 12C16.7878 9.35583 14.6442 7.21216 12 7.21216ZM12 14.9924C10.3478 14.9924 9.00757 13.6522 9.00757 12C9.00757 10.3478 10.3478 9.00757 12 9.00757C13.6522 9.00757 14.9924 10.3478 14.9924 12C14.9924 13.6522 13.6522 14.9924 12 14.9924Z" fill="#4ecc5e" />
                <path d="M17.2071 8.09757C17.7577 8.09757 18.2041 7.65113 18.2041 7.10057C18.2041 6.55 17.7577 6.10357 17.2071 6.10357C16.6565 6.10357 16.2101 6.55 16.2101 7.10057C16.2101 7.65113 16.6565 8.09757 17.2071 8.09757Z" fill="#4ecc5e" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@CreateASchbang">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.543 6.498C21.4293 6.04531 21.1973 5.62785 20.8732 5.29189C20.5491 4.95594 20.1456 4.71479 19.707 4.595C18.11 4.167 11.702 4.167 11.702 4.167C11.702 4.167 5.293 4.167 3.703 4.595C3.26259 4.71309 2.85799 4.95438 2.53417 5.29196C2.21034 5.62955 1.97981 6.05021 1.868 6.507C1.57 8.142 1.57 11.847 1.57 11.847C1.57 11.847 1.57 15.553 1.862 17.188C1.97454 17.6422 2.20652 18.0611 2.53092 18.3978C2.85532 18.7345 3.25945 18.9756 3.698 19.095C5.293 19.523 11.702 19.523 11.702 19.523C11.702 19.523 18.11 19.523 19.707 19.095C20.1464 18.9763 20.5504 18.736 20.8746 18.4001C21.1988 18.0643 21.4306 17.6454 21.544 17.192C21.84 15.553 21.84 11.848 21.84 11.848C21.84 11.848 21.841 8.142 21.543 6.498ZM9.666 14.652V9.042L14.588 11.847L9.666 14.652Z" fill="#ffffff" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/schbang">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#ffffff" />
                <path d="M14 10.5H16.5L16 13.5H14V19H11V13.5H9V10.5H11V8.5C11 6.5 12.5 5.5 14.5 5.5H16.5V8H15C14.5 8 14 8.5 14 9V10.5Z" fill="#4ecc5e" />
              </svg>
            </SocialIcon>
          </div>

          {/* CENTER LEGAL ITEMS */}
          <nav
            className="flex flex-wrap items-center justify-center font-medium gap-4 sm:gap-6 text-sm sm:12px"
            style={{
              color: "#ffffff",
            }}
          >
            {legal.map((l) => (
              <a
                key={l}
                href="#"
                className="premium-transition hover:opacity-80"
                style={{ color: "#ffffff" }}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE TEXT */}
          <div
            className="font-medium text-center md:text-right flex flex-col"
            style={{
              color: "#ffffff",
              fontSize: "12px",
            }}
          >
            <span>Proudly created in India.</span>
            <span>All Right Reserved, All Wrong Reversed.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
