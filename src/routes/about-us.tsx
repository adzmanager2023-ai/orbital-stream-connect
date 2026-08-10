import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import aboutImg from "@/assets/about.jpg";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About MSL Colombo — Reliable Logistics & Business Solutions" },
      {
        name: "description",
        content:
          "Who we are, how we work and what we value. MSL Colombo delivers professional logistics, transport, printing and advertising solutions.",
      },
      { property: "og:title", content: "About MSL Colombo" },
      {
        property: "og:description",
        content:
          "Reliable solutions, professional service and strong connections — the MSL Colombo approach.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Integrity", d: "Honest, transparent coordination on every engagement." },
  { n: "02", t: "Reliability", d: "Consistent service our clients can plan around." },
  { n: "03", t: "Professionalism", d: "Careful handling, clear communication, attention to detail." },
  { n: "04", t: "Customer Focus", d: "Solutions shaped around each client's requirements." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title={"Reliable Solutions.\nProfessional Service.\nStrong Connections."}
        subtitle="MSL Colombo brings logistics, transportation, printing and advertising together under one coordinated approach."
        image={heroPort}
        alt="Container terminal at blue hour"
      />

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-primary">Who We Are</p>
              <h2 className="display-2 mt-5 text-foreground">A Connected Operator.</h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                MSL Colombo connects businesses with dependable logistics, transportation, printing
                and advertising solutions designed to keep operations moving.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our approach is simple: professional coordination, reliable service and solutions
                shaped around each client's requirements.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <img
              src={aboutImg}
              alt="Logistics team coordinating warehouse operations"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden surface-navy py-24 md:py-32">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-[color:var(--accent)]">Our Approach</p>
            <h2 className="display-2 mt-5 max-w-2xl text-on-navy">Coordination First.</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-on-navy-muted">
              Every requirement begins with understanding the movement behind it — what needs to
              travel, when it needs to arrive and what has to happen around it. From there we build
              a plan and stay accountable to it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-primary">Our Values</p>
            <h2 className="display-2 mt-5 text-foreground">What We Stand On.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="group h-full border-t border-border py-8 transition-colors duration-500 lg:border-l lg:border-t-0 lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0">
                  <p className="eyebrow text-[color:var(--accent)]">{v.n}</p>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
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
