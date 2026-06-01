import Link from "next/link";
import Image from "next/image";
import { IMAGES, PAGES, SOCIAL_LINKS } from "@/lib/constants";
import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";

const iconMap = {
  X: FaXTwitter,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {/* Logo Column */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Image
                src={IMAGES.gdg_logo.src}
                alt="GDG Logo"
                width={IMAGES.gdg_logo.w}
                height={IMAGES.gdg_logo.h}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="font-sans text-[22px] font-medium leading-[1.2] tracking-tight text-white">
              Google <br />
              Developer <br />
              Group
            </div>
            <div className="font-sans text-[18px] font-medium text-[#4285F4] leading-[1.2] mt-2">
              Babcock <br />
              University
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-10 md:pt-4">
            <div>
              <h3 className="font-bold text-white text-[15px] mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-wrap items-center gap-6 text-[14px] text-gray-400 font-medium">
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={PAGES.methodology}
                    className="hover:text-white transition-colors"
                  >
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#nominations"
                    className="hover:text-white transition-colors"
                  >
                    Nominate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-[15px] mb-4">
                Contact Us
              </h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link, i) => {
                  const Icon = iconMap[link.label as keyof typeof iconMap];
                  // Using exact Google colors matching the mockup
                  const colors = [
                    "bg-[#4285F4]", // Blue for X
                    "bg-[#EA4335]", // Red for LinkedIn
                    "bg-[#FBBC04]", // Yellow for Instagram
                    "bg-[#34A853]", // Green for TikTok
                  ];
                  const bgColor = colors[i % colors.length];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center hover:opacity-90 transition-opacity`}
                    >
                      {Icon && <Icon className="w-4 h-4 text-white" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[11px] text-gray-500 pt-8 border-t border-white/10 font-medium">
          <p>© 2026 GDG on Campus Babcock. All rights reserved.</p>
        </div>
      </div>

      {/* The large colorful Google doodle asset on the bottom right */}
      <div className="hidden md:block absolute -bottom-8 -right-8 w-100 h-75 md:w-150 md:h-112.5 z-0 pointer-events-none transform translate-x-12 translate-y-12">
        <Image
          src={IMAGES.footer_doodle.src}
          alt="Footer Doodle"
          fill
          className="object-contain object-bottom right"
        />
      </div>
    </footer>
  );
}
