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
    <footer className="bg-brand-navy text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif font-bold text-5xl leading-snug mb-4">
              Babcock 100
            </div>
            <div className="flex gap-1 mt-4">
              <Image
                src={IMAGES.gdg_logo.src}
                alt="GDG Logo"
                width={IMAGES.gdg_logo.w}
                height={IMAGES.gdg_logo.h}
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-sm mb-4">Quick links</h3>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
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
                    href="/#the-class"
                    className="hover:text-white transition-colors"
                  >
                    The Class
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
              <h3 className="font-semibold text-sm mb-4">Connect</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link, i) => {
                  const Icon = iconMap[link.label as keyof typeof iconMap];
                  const colors = [
                    "bg-brand-blue",
                    "bg-brand-red",
                    "bg-brand-amber",
                    "bg-brand-green",
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
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-8 border-t border-white/10">
          <p>© 2026 GDG Babcock University. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-96 md:h-96 z-0 pointer-events-none">
        <Image
          src={IMAGES.footer_doodle.src}
          alt="Footer Doodle"
          fill
          className="object-contain"
        />
      </div>
    </footer>
  );
}
