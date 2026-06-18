import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Radar } from "lucide-react";
import {
  differentiators,
  featuredServices,
  futureIndustries,
  growthServices,
  yearOneIndustries,
} from "@/lib/content";
import { CtaBand, IconCard, Section } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-signal">
              Houston-Based Drone Operations
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Aerial Support. Professional Results.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              High Eye Solutions provides drone imaging, inspection support,
              construction documentation, and aerial media services for
              property owners, contractors, real estate professionals, and local
              businesses across priority Texas, Louisiana, and Illinois
              markets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-signal px-5 py-3 text-sm font-black text-navy transition hover:bg-white"
              >
                Request Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-flight hover:text-flight"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="aerial-panel relative min-h-[420px] overflow-hidden p-6 shadow-glow">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(47,128,237,0.14)_45%,transparent_100%)]" />
            <div className="relative flex h-full min-h-[368px] flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>Flight Planning</span>
                <span className="text-right leading-5">
                  Houston, TX
                  <br />
                  San Antonio, TX
                  <br />
                  DFW & Austin, TX
                  <br />
                  New Orleans, LA
                  <br />
                  Chicago, IL
                </span>
              </div>
              <div className="grid place-items-center">
                <div className="relative h-56 w-56 border border-flight/30">
                  <div className="absolute inset-6 border border-signal/30" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-flight/30" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-flight/30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="flex h-24 w-24 items-center justify-center border border-flight bg-flight/15 text-flight">
                      <Radar size={42} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <Metric label="Aircraft" value="DJI Air 3S" />
                <Metric label="Certified" value="Part 107" />
                <Metric label="Mode" value="Safety First" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why Choose Us"
        title="Professional standards for practical drone work."
        description="High Eye Solutions is built for local client service today and scalable commercial workflows tomorrow."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured Services"
        title="Aerial deliverables for property, contractor, and marketing needs."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <IconCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Coming Next"
        title="Growth services under active development."
        description="These capabilities represent planned expansion as High Eye Solutions builds portfolio depth, aircraft readiness, software workflows, and project experience."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {growthServices.map((service) => (
            <div
              key={service}
              className="border border-flight/25 bg-flight/10 p-5 text-sm font-bold text-white"
            >
              {service}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Built for Year 1 markets with a clear path into larger operations."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <IndustryGroup title="Year 1 Service Markets" items={yearOneIndustries} />
          <IndustryGroup title="Future Growth Markets" items={futureIndustries} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/5 p-3">
      <p className="font-bold text-white">{value}</p>
      <p className="mt-1 uppercase tracking-[0.16em] text-slate-500">{label}</p>
    </div>
  );
}

function IndustryGroup({
  title,
  items,
}: {
  title: string;
  items: { title: string; icon: ComponentType<{ size?: number }> }[];
}) {
  return (
    <div className="aerial-panel p-6">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map(({ title: itemTitle, icon: Icon }) => (
          <div
            key={itemTitle}
            className="flex items-center gap-3 border border-white/10 bg-white/5 p-4"
          >
            <Icon size={20} />
            <span className="text-sm font-bold text-slate-200">{itemTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
