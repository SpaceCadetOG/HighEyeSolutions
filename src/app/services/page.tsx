import { ArrowRight, BadgeCheck, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CtaBand, BulletList, PageHero, Section } from "@/components/ui";
import {
  growthServiceSections,
  immediateServices,
  pricingPackages,
  serviceSections,
  serviceWorkflows,
} from "@/lib/content";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Current drone services, practical pricing, and a clear delivery process."
        description="High Eye Solutions is FAA Part 107 certified and reviews missions across priority Texas, Louisiana, and Illinois markets for real estate media, roof and insurance documentation, construction progress visuals, and custom aerial work."
      />

      <Section
        eyebrow="Available Now"
        title="Immediate services for property and claim professionals."
        description="These are the primary commercial services currently offered. Every mission remains subject to airspace, weather, access, permissions, and safe operating conditions."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {immediateServices.map((service) => (
            <article key={service.title} className="aerial-panel p-6 shadow-glow">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-flight">
                {service.audience}
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {service.description}
              </p>
              <div className="mt-5">
                <BulletList items={service.deliverables} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing Guide"
        title="Clear starting ranges for common missions."
        description="These ranges are planning estimates, not automatic quotes. Final pricing depends on site size, travel, airspace, access, urgency, weather windows, editing, file volume, and requested deliverables."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricingPackages.map((item) => (
            <article
              key={`${item.service}-${item.package}`}
              className="border border-white/10 bg-navy/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-flight">
                {item.service}
              </p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h2 className="text-xl font-black text-white">{item.package}</h2>
                <p className="whitespace-nowrap text-lg font-black text-signal">
                  {item.price}
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
              <ul className="mt-5 grid gap-3">
                {item.includes.map((included) => (
                  <li
                    key={included}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <Check className="h-4 w-4 flex-none text-signal" />
                    {included}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-signal/25 bg-signal/5 p-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-sm leading-6 text-slate-300">
            Rush response, controlled airspace coordination, extensive travel,
            multiple structures, advanced editing, recurring visits, or
            unusually complex sites may change the final quote.
          </p>
          <Link
            href="/portal"
            className="inline-flex min-h-11 flex-none items-center gap-2 bg-signal px-5 text-sm font-black text-navy"
          >
            Start a Mission <ArrowRight size={17} />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Mission Workflow"
        title="From service request to delivery and payment."
        description="The same disciplined process keeps scope, safety, communication, files, and payment milestones clear."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceWorkflows.map((workflow) => (
            <article key={workflow.service} className="aerial-panel p-6">
              <h2 className="text-xl font-black text-white">
                {workflow.service}
              </h2>
              <ol className="mt-6 grid gap-5">
                {workflow.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center border border-flight/40 bg-flight/10 text-xs font-black text-flight">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Licensing & Scope"
        title="Certified to fly commercial missions, precise about professional boundaries."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="border border-flight/25 bg-flight/5 p-6">
            <BadgeCheck className="text-flight" size={28} />
            <h2 className="mt-5 text-2xl font-black text-white">
              FAA Part 107 Certified
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              High Eye Solutions can perform commercial drone operations under
              FAA Part 107 when the mission can be conducted lawfully and
              safely. Each project still requires airspace review, site
              permission, weather evaluation, and a go/no-go safety decision.
            </p>
          </article>
          <article className="border border-signal/25 bg-signal/5 p-6">
            <ShieldCheck className="text-signal" size={28} />
            <h2 className="mt-5 text-2xl font-black text-white">
              Insurance Documentation Support
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              High Eye Solutions supplies aerial imagery and organized visual
              records to support licensed adjusters, carriers, contractors, and
              property owners. The service does not determine coverage,
              estimate claim value, establish damage causation, replace an
              engineer, or perform public-adjusting services.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Additional Support"
        title="Flexible current service lines."
        description="Supporting assignments can be scoped around the practical business need and available operating conditions."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceSections.map((section) => (
            <article key={section.title} className="aerial-panel p-6 shadow-glow">
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {section.summary}
              </p>
              <div className="mt-5">
                <BulletList items={section.items} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Growth Services"
        title="Expanding capabilities for mapping, data, and industrial support."
        description="These services are intentionally labeled as future growth areas while the company builds aircraft readiness, repeatable workflows, software capability, and project experience."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {growthServiceSections.map(({ icon: Icon, ...section }) => (
            <article key={section.title} className="aerial-panel p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-signal/40 bg-signal/10 text-signal">
                <Icon size={24} />
              </div>
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {section.summary}
              </p>
              <div className="mt-5">
                <BulletList items={section.items} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
