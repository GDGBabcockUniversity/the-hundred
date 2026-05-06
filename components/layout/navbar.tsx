"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES, NAV_LINKS, PAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 py-3 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-gray-200/60 bg-white px-5 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)] sm:px-8 sm:py-3">
        {/* Logo */}
        <Link href={PAGES.home} className="flex items-center gap-2.5">
          <Image
            src={IMAGES.gdg_logo.src}
            alt="Google Developer Group logo"
            width={IMAGES.gdg_logo.w}
            height={IMAGES.gdg_logo.h}
            className="w-10 h-10"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-gray-100 hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-3 bg-brand-navy px-6 text-sm font-medium text-white"
            size="lg"
          >
            <Link href={PAGES.nominate}>Nominate</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-brand-navy/70 hover:bg-gray-100 hover:text-brand-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={cn(
          "mx-auto max-w-6xl overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          mobileOpen ? "mt-2 max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="rounded-2xl bg-white px-4 pb-4 pt-2 shadow-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-gray-50 hover:text-brand-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 px-3">
            <Button
              asChild
              className="w-full bg-brand-navy text-sm font-medium text-white"
              size="lg"
            >
              <Link href={PAGES.nominate} onClick={() => setMobileOpen(false)}>
                Nominate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
