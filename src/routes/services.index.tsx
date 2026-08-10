import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ServicePanel, type ServiceItem } from "@/components/site/ServicePanel";
import { CtaBand } from "@/components/site/CtaBand";
import heroPort from "@/assets/hero-port.jpg";
import seaCargo from "@/assets/sea-cargo.jpg";
import airCargo from "@/assets/air-cargo.jpg";
import transport from "@/assets/transport.jpg";
import printing from "@/assets/printing.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Sea Cargo, Air Cargo, Transport & Printing | MSL Colombo" },
      {
        name: "description",
        content:
          "Explore MSL Colombo services: sea cargo, air cargo, transport, plus offset printing, digital printing and advertising solutions.",
      },
      { property: "og:title", content: "MSL Colombo Services" },
      {
        property: "og:description",
        content: "Sea cargo, air cargo, transport and printing services from MSL Colombo.",
      },
    ],
  }),
  component: ServicesPage,
});

const services: ServiceItem[] = [
  {
    index: "01",
    title: "Sea Cargo",
    description: "Professional sea freight and cargo coordination for reliable movement of goods.",
    image: seaCargo,
    alt: "Container vessel at sea",
    to: "/services/sea-cargo",
  },
  {
    index: "02",
    title: "Air Cargo",
    description: "Efficient air freight solutions for time-sensitive business requirements.",
    image: airCargo,
    alt: "Cargo aircraft loading at night",
    to: "/services/air-cargo",
  },
  {
    index: "03",
    title: "Transport",
    description:
      "Reliable transportation solutions for moving cargo efficiently between destinations.",
    image: transport,
    alt: "Logistics truck on a highway",
    to: "/services/transport",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={"One Connected Business.\nMultiple Solutions."}
        subtitle="Core logistics and business services built around reliability, efficiency and professional coordination."
        image={heroPort}
        alt="Container port operations"
      />

      <section className="relative overflow-hidden surface-navy py-24 md:py-32">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServicePanel key={s.title} item={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={printing}
              alt="Printed brochures on a production line"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-primary">Business Division</p>
            <h2 className="display-2 mt-5 text-foreground">Printing &amp; Advertising.</h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Professional offset printing, digital printing and advertising solutions for
              businesses, organizations and brands.
            </p>
            <Link
              to="/services/printing-services"
              className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-5 eyebrow text-primary-foreground transition-colors duration-300 hover:bg-[color:var(--accent)]"
            >
              Printing Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
