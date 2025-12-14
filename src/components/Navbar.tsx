"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=unisex" },
  // { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light-100">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Nike Home" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={28}
            height={28}
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

        <div className="hidden items-center gap-6 md:flex">
          <button className="text-body text-dark-900 transition-colors hover:text-dark-700">
            Search
          </button>
          <button className="text-body text-dark-900 transition-colors hover:text-dark-700">
            My Cart
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
              open ? "translate-y-1.75 rotate-45" : "",
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
              open ? "-translate-y-1.75 -rotate-45" : "",
            ].join(" ")}
          />
        </button>
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
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "bg-light-100",
            "shadow-2xl",
            "transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "translate-x-full",
            "flex flex-col",
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

            <div className="mt-6 flex items-center justify-between border-t border-light-300 pt-6">
              <button className="text-dark-900">Search</button>
              <button className="text-dark-900">My Cart</button>
            </div>

            <div className="mt-10 rounded-2xl bg-light-200 p-5">
              <p className="text-(length:--text-body) text-dark-700">
                Become a Nike Member for the best products, inspiration and
                stories in sport.{" "}
                <span className="text-dark-900">Learn more</span>
              </p>

              <div className="mt-5 flex gap-3">
                <button className="h-11 rounded-full bg-dark-900 px-6 text-light-100">
                  Join Us
                </button>
                <button className="h-11 rounded-full border border-light-400 px-6 text-dark-900">
                  Sign In
                </button>
              </div>
            </div>
          </nav>
          <div className="flex-1" />
        </aside>
      </div>
    </header>
  );
}
