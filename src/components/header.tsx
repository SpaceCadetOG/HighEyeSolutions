"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center border border-flight/40 bg-flight/15 text-sm font-black tracking-widest text-white">
            HE
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold uppercase tracking-[0.22em] text-white sm:text-base">
              High Eye
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "text-signal"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden border border-signal/50 bg-signal px-4 py-2 text-sm font-bold text-navy transition hover:bg-white lg:inline-flex"
        >
          Request Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile main">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
