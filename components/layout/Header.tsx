import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMAGES, PAGES } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="flex items-center justify-between">
        <Link href={PAGES.home} className="flex items-center gap-2">
          <Image
            src={IMAGES.gdg_logo.src}
            alt="GDG Logo"
            width={IMAGES.gdg_logo.w}
            height={IMAGES.gdg_logo.h}
            className="w-12 h-12 object-contain"
          />
        </Link>

        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between shadow-sm">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="#nominations"
              className="text-gray-600 hover:text-gray-900"
            >
              Nominations
            </Link>
            <Link
              href="#the-class"
              className="text-gray-600 hover:text-gray-900"
            >
              The Class
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>

          <span className="text-gray-600 mx-4 hidden md:block">|</span>

          <Button
            asChild
            className="rounded-full bg-brand-navy text-white hover:bg-brand-navy h-8 pr-4 pl-2"
          >
            <Link href={PAGES.nominate}>
              <ArrowRight className="h-6 w-6 bg-white text-black p-0.5 rounded-full mr-2" />
              Nominate
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
