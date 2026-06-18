import Link from "next/link";
import { company, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">{company.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Professional aerial imaging, inspection support, construction
            documentation, and drone services from a Houston base across
            priority Texas, Louisiana, and Illinois markets.
          </p>
          <p className="mt-5 text-sm font-semibold text-signal">
            {company.serviceAreas}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
            Navigate
          </p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/portal"
              className="text-sm font-semibold text-flight transition hover:text-white"
            >
              Client Portal
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
            Future Roadmap
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Mapping, photogrammetry, industrial support, secure project
            delivery, and GCP-backed client workflows.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        (c) {new Date().getFullYear()} {company.name}. Built for safe,
        professional growth.
      </div>
    </footer>
  );
}
