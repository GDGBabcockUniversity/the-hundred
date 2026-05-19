import Link from "next/link";
import { Globe, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

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
              <ul className="flex items-center gap-4 text-sm text-gray-300">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#methodology"
                    className="hover:text-white transition-colors"
                  >
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#the-class"
                    className="hover:text-white transition-colors"
                  >
                    The Class
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4">Contact us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-amber flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-8 border-t border-white/10">
          <p>© 2026 GDG Babcock University. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-96 h-96 z-0 pointer-events-none">
        <Image
          src="/footer-doodle.png"
          alt="Footer Doodle"
          fill
          className="object-contain"
        />
      </div>
    </footer>
  );
}
