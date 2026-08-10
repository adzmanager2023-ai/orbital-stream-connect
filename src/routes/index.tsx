import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { RouteMap } from "@/components/site/RouteMap";
import { ServicePanel, type ServiceItem } from "@/components/site/ServicePanel";
import { CtaBand } from "@/components/site/CtaBand";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import heroPort from "@/assets/hero-port.jpg";
import seaCargo from "@/assets/sea-cargo.jpg";
import airCargo from "@/assets/air-cargo.jpg";
import transport from "@/assets/transport.jpg";
import aboutImg from "@/assets/about.jpg";
import printing from "@/assets/printing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MSL Colombo — Connected Logistics & Business Solutions" },
      {
        name: "description",
        content:
          "MSL Colombo delivers sea cargo, air cargo, transport, printing and advertising solutions — connected logistics built for a modern, moving world.",
      },
      { property: "og:title", content: "MSL Colombo — Connected Logistics & Business Solutions" },
      {
        property: "og:description",
        content:
          "Sea cargo, air cargo, transport, printing and advertising solutions coordinated by MSL Colombo.",
      },
    ],
  }),
  component: Home,
});

const services: ServiceItem[] = [
  {
    index: "01",
    title: "Sea Cargo",
    description:
      "Professional sea freight and cargo coordination for reliable movement of goods.",
    image: seaCargo,
    alt: "Container vessel loaded with cargo at sea",
    to: "/services/sea-cargo",
  },
  {
    index: "02",
    title: "Air Cargo",
    description: "Efficient air freight solutions for time-sensitive business requirements.",
    image: airCargo,
    alt: "Cargo aircraft being loaded on the apron at night",
    to: "/services/air-cargo",
  },
  {
    index: "03",
    title: "Transport",
    description:
      "Reliable transportation solutions for moving cargo efficiently between destinations.",
    image: transport,
    alt: "Logistics truck moving on a highway at dusk",
    to: "/services/transport",
  },
];

const pillars = [
  { n: "01", t: "Reliability", d: "Dependable service and professional coordination." },
  { n: "02", t: "Efficiency", d: "Solutions designed to keep cargo and business moving." },
  {
    n: "03",
    t: "Professional Service",
    d: "A customer-focused approach with attention to detail.",
  },
  {
    n: "04",
    t: "Connected Solutions",
    d: "Integrated logistics and business support for modern businesses.",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden pt-28">
        <img
          src={heroPort}
          alt="Container terminal with gantry cranes at blue hour"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-[color:var(--navy-deep)]/78"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 grid-tech opacity-80" aria-hidden="true" />
        <RouteMap className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-[55%] w-full opacity-35" />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[color:var(--accent)]/25 blur-[140px]"
          aria-hidden="true"
        />

        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-[color:var(--accent)]">
                Global Logistics • Smart Business Solutions
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-1 mt-6 text-on-navy">
                Connecting Businesses.
                <br />
                <span className="text-on-navy/70">Moving Possibilities.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-on-navy-muted md:text-lg">
                Reliable logistics and professional business solutions built for a connected world.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact-us"
                  hash="quote"
                  className="group inline-flex items-center justify-center gap-3 bg-[color:var(--accent)] px-8 py-5 eyebrow text-accent-foreground transition-all duration-300 hover:glow-indigo"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 border border-[color:var(--hairline-navy)] px-8 py-5 eyebrow text-on-navy transition-colors duration-300 hover:bg-[color:var(--on-navy)]/8"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Smart hero panel */}
          <Reveal delay={380}>
            <div className="glass-panel rounded-md p-7">
              <p className="eyebrow text-on-navy-muted">Global Logistics</p>
              <p className="mt-2 text-xl font-bold text-on-navy">Connected Solutions</p>

              <svg viewBox="0 0 300 120" className="mt-7 w-full" aria-hidden="true">
                <path
                  d="M30 90 C 90 30, 150 30, 150 60 C 150 90, 210 90, 270 30"
                  fill="none"
                  stroke="var(--hairline-navy)"
                  strokeWidth="1"
                />
                <path
                  d="M30 90 C 90 30, 150 30, 150 60 C 150 90, 210 90, 270 30"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.6"
                  strokeDasharray="24 176"
                  className="animate-dash"
                />
                {[
                  [30, 90],
                  [150, 60],
                  [270, 30],
                ].map(([x, y]) => (
                  <circle key={`${x}`} cx={x} cy={y} r="4" fill="var(--accent)" />
                ))}
              </svg>

              <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-[color:var(--hairline-navy)] pt-5">
                {["Sea", "Air", "Land"].map((m) => (
                  <li key={m} className="eyebrow text-on-navy">
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-on-navy-muted">
                Sea → Air → Transport → Business
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-5 pb-8 md:px-8">
          <ArrowDown
            className="h-5 w-5 text-on-navy-muted animate-scroll-hint"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ---------- LOGISTICS NETWORK ---------- */}
      <section className="relative overflow-hidden surface-navy py-24 md:py-36">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow text-[color:var(--accent)]">Network</p>
                <h2 className="display-2 mt-5 text-on-navy">Built Around Movement.</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-7 max-w-md text-base leading-relaxed text-on-navy-muted">
                  From cargo coordination to transportation and business support, MSL Colombo brings
                  connected solutions together.
                </p>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <div className="relative rounded-md border border-[color:var(--hairline-navy)] bg-[color:var(--navy-deep)]/50 p-4">
                <RouteMap className="w-full" />
                <p className="mt-2 px-2 pb-1 text-[10px] uppercase tracking-[0.2em] text-on-navy-muted/70">
                  Illustrative network — not operational route data
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="relative overflow-hidden bg-background py-24 md:py-36">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Warehouse operations with forklift moving palletised goods"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="absolute -bottom-5 -right-5 hidden h-32 w-32 border border-[color:var(--accent)]/40 md:block"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <div className="relative lg:pl-10">
            <span
              className="absolute left-0 top-1 hidden h-full w-px bg-gradient-to-b from-[color:var(--accent)] via-border to-transparent lg:block"
              aria-hidden="true"
            />
            <Reveal>
              <p className="eyebrow text-primary">About MSL Colombo</p>
              <h2 className="display-2 mt-5 text-foreground">Moving Business Forward.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                MSL Colombo connects businesses with dependable logistics, transportation, printing
                and advertising solutions designed to keep operations moving.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our approach is simple: professional coordination, reliable service and solutions
                shaped around each client's requirements.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/about-us"
                className="group mt-10 inline-flex items-center gap-3 border-b border-primary pb-2 eyebrow text-primary"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="relative overflow-hidden surface-navy py-24 md:py-36">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-[color:var(--accent)]">Services</p>
              <h2 className="display-2 mt-5 max-w-2xl text-on-navy">
                One Connected Business.
                <br />
                <span className="text-on-navy/70">Multiple Solutions.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm text-sm leading-relaxed text-on-navy-muted">
                Core logistics and business services built around reliability, efficiency and
                professional coordination.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServicePanel key={s.title} item={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY MSL ---------- */}
      <section className="relative overflow-hidden bg-[color:var(--navy-deep)] py-24 md:py-32">
        <div className="absolute inset-0 grid-tech opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <h2 className="display-2 max-w-2xl text-on-navy">Why Choose MSL Colombo?</h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="group relative h-full border-t border-[color:var(--hairline-navy)] px-0 py-8 transition-colors duration-500 lg:border-l lg:border-t-0 lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0">
                  <span
                    className="absolute left-0 top-0 hidden h-0 w-px bg-[color:var(--accent)] transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full lg:block"
                    aria-hidden="true"
                  />
                  <p className="eyebrow text-[color:var(--accent)]">{p.n}</p>
                  <h3 className="mt-4 text-xl font-bold text-on-navy">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-navy-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SMART QUOTE ---------- */}
      <section id="quote" className="relative overflow-hidden surface-navy py-24 md:py-36">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[color:var(--accent)]/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-[color:var(--accent)]">Request a Quote</p>
            <h2 className="display-2 mt-5 text-on-navy">Tell Us What Needs Moving.</h2>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-on-navy-muted">
              A short, guided enquiry — tell us the service, the requirement and how to reach you.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <QuoteWizard />
          </Reveal>
        </div>
      </section>

      {/* ---------- PRINTING DIVISION ---------- */}
      <section className="relative overflow-hidden bg-background py-24 md:py-36">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-primary">Second Division</p>
            <h2 className="display-2 mt-5 max-w-3xl text-foreground">
              Beyond Logistics.
              <br />
              <span className="text-muted-foreground">We Make Businesses Visible.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal delay={120}>
              <img
                src={printing}
                alt="Offset printing press producing brochures and corporate materials"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                MSL Colombo also provides professional offset printing, digital printing and
                advertising solutions for businesses, organizations and brands.
              </p>
              <ul className="mt-10 border-t border-border">
                {["Offset Printing", "Digital Printing", "Advertising Services"].map((t, i) => (
                  <li
                    key={t}
                    className="group flex items-center justify-between border-b border-border py-6 transition-colors duration-300 hover:bg-secondary"
                  >
                    <span className="flex items-center gap-6">
                      <span className="eyebrow text-muted-foreground">{`0${i + 1}`}</span>
                      <span className="text-lg font-semibold text-foreground md:text-xl">{t}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services/printing-services"
                className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-5 eyebrow text-primary-foreground transition-all duration-300 hover:bg-[color:var(--accent)]"
              >
                Printing Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
