import { CtaBand, BulletList, PageHero, Section } from "@/components/ui";
import { growthServiceSections, serviceSections } from "@/lib/content";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Commercial drone services for clear documentation and usable media."
        description="High Eye Solutions supports clients in Houston, San Antonio, Dallas-Fort Worth, and Chicago with practical aerial imaging, inspection support, construction progress visuals, and marketing content."
      />

      <Section
        eyebrow="Current Services"
        title="Year 1 service lines."
        description="Focused capabilities for residential, commercial, contractor, and small business clients."
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
