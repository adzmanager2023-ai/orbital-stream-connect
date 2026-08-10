import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import printing from "@/assets/printing.jpg";

export const Route = createFileRoute("/services/printing-services")({
  head: () => ({
    meta: [
      { title: "Printing & Advertising Services | MSL Colombo" },
      {
        name: "description",
        content:
          "Offset printing, digital printing and advertising solutions from MSL Colombo for businesses, organizations and brands.",
      },
      { property: "og:title", content: "Printing & Advertising Services | MSL Colombo" },
      {
        property: "og:description",
        content: "Professional offset printing, digital printing and advertising solutions.",
      },
    ],
  }),
  component: PrintingPage,
});

const modules = [
  {
    n: "01",
    t: "Offset Printing",
    items: [
      "Business Cards",
      "Letterheads",
      "Brochures",
      "Flyers",
      "Catalogues",
      "Company Profiles",
      "Publications",
      "Corporate stationery",
    ],
  },
  {
    n: "02",
    t: "Digital Printing",
    items: [
      "Short-run printing",
      "Marketing materials",
      "Business documents",
      "Promotional materials",
      "High-quality digital output",
    ],
  },
  {
    n: "03",
    t: "Advertising Services",
    items: [
      "Promotional materials",
      "Advertising artwork",
      "Campaign materials",
      "Branding materials",
      "Corporate visual communication",
    ],
  },
];

function PrintingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Printing Services"
        title={"Printing That Makes\nYour Business Visible."}
        subtitle="Professional offset, digital printing and advertising solutions for businesses, organizations and brands."
        image={printing}
        alt="Offset printing press producing corporate materials"
      />

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.n} delay={i * 90}>
                <div className="group h-full bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-panel)] md:p-10">
                  <p className="eyebrow text-[color:var(--accent)]">{m.n}</p>
                  <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{m.t}</h2>
                  <ul className="mt-8 space-y-3">
                    {m.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 border-b border-border pb-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]"
                          aria-hidden="true"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
