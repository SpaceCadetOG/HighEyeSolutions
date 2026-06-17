import { CtaBand, PageHero, Section } from "@/components/ui";
import { futureIndustrialGrowth, industrySolutions } from "@/lib/content";

export const metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Drone support for the clients High Eye Solutions can serve today."
        description="The company is focused on practical aerial services for property, contractor, real estate, and business clients in Houston, San Antonio, and Chicago while building toward larger commercial and industrial markets."
      />

      <Section
        eyebrow="Practical Solutions"
        title="Clear visuals for decisions, documentation, and marketing."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industrySolutions.map((industry) => (
            <article key={industry.title} className="aerial-panel p-6 shadow-glow">
              <h2 className="text-xl font-black text-white">{industry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Future Industrial Growth"
        title="Long-term markets as systems, aircraft, and reporting mature."
        description="These sectors are part of the growth vision, not overstated current specialization. High Eye Solutions is building the standards and experience needed to support larger contractor and enterprise opportunities over time."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {futureIndustrialGrowth.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/5 p-5 text-sm font-bold uppercase tracking-[0.14em] text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
