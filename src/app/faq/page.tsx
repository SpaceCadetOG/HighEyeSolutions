import { CtaBand, PageHero, Section } from "@/components/ui";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers for planning drone work."
        description="These answers are written for a startup-stage drone services company and can be updated as certifications, insurance, aircraft, and service systems mature."
      />

      <Section eyebrow="Common Questions" title="Before you request a quote.">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-white/10 bg-white/5 p-5"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-2xl leading-none text-signal group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
