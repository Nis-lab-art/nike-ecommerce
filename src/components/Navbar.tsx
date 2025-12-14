"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=unisex" },
  // { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-light-100">
      <div className="hidden bg-light-200 border-b border-light-300 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/sign-up"
            className="font-medium text-dark-900 hover:text-dark-700 transition-colors"
          >
            Join Us
          </Link>

          <span className="text-dark-500">|</span>

          <Link
            href="/sign-in"
            className="font-medium text-dark-900 hover:text-dark-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>

      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Nike Home" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={50}
            height={50}
            priority
            className="invert"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-body text-dark-900 transition-colors hover:text-dark-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              aria-label="Wishlist"
              className="text-dark-900 transition-colors hover:text-dark-700"
            >
              <Heart className="h-5 w-5" />
            </button>

            <button
              aria-label="My Cart"
              className="text-dark-900 transition-colors hover:text-dark-700"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex flex-col items-center justify-center gap-1.5 rounded-md p-2 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>

            <span
              className={[
                "block h-0.5 w-6 bg-dark-900 transition-transform duration-200",
                open ? "translate-y-1.5 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-6 bg-dark-900 transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-6 bg-dark-900 transition-transform duration-200",
                open ? "-translate-y-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      <div
        className={[
          "md:hidden",
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-black/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={[
            "absolute right-0 top-0 h-full w-[80%] max-w-sm",
            "bg-light-100",
            "shadow-2xl",
            "transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "translate-x-full",
            "flex flex-col overflow-y-auto overscroll-contain",
          ].join(" ")}
        >
          <div className="flex items-center justify-end px-4 py-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-dark-900" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-dark-900" />
              </span>
            </button>
          </div>

          <nav className="px-6">
            <ul className="space-y-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="flex items-center justify-between">
                  <Link
                    href={l.href}
                    className="text-dark-900 font-medium text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>

                  <span className="text-2xl text-dark-700">›</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl p-5">
              <p className="text-dark-700 text-xl font-medium">
                Become a Nike Member for the best products, inspiration and
                stories in sport.
                <span className="text-dark-900">Learn more</span>
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  href="/sign-up"
                  className="font-medium text-dark-900 hover:text-dark-700 transition-colors"
                >
                  <button className="rounded-4xl bg-dark-900 px-4 py-2 text-white hover:bg-dark-700">
                    Join Us
                  </button>
                </Link>
                <Link
                  href="/sign-in"
                  className="font-medium text-dark-900 hover:text-dark-700 transition-colors"
                >
                  <button className="rounded-4xl px-4 py-2 border border-dark-500 hover:bg-dark-700 text-dark-900">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex-1" />
        </aside>
      </div>
    </header>
  );
}
