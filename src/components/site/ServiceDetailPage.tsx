import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { CtaBand } from "./CtaBand";

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  overviewHeading: string;
  overview: string[];
  benefits: { n: string; t: string; d: string }[];
};

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        alt={data.alt}
      />

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-primary">Overview</p>
              <h2 className="display-2 mt-5 text-foreground">{data.overviewHeading}</h2>
            </Reveal>
            <Reveal delay={110}>
              {data.overview.map((p) => (
                <p key={p} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={180}>
              <Link
                to="/contact-us"
                hash="quote"
                className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-5 eyebrow text-primary-foreground transition-colors duration-300 hover:bg-[color:var(--accent)]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="group overflow-hidden">
              <img
                src={data.image}
                alt={data.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden surface-navy py-24 md:py-32">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-[color:var(--accent)]">Key Benefits</p>
            <h2 className="display-2 mt-5 max-w-2xl text-on-navy">Built For Movement.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-[color:var(--hairline-navy)] md:grid-cols-3">
            {data.benefits.map((b, i) => (
              <Reveal key={b.n} delay={i * 90}>
                <div className="h-full bg-[color:var(--navy-deep)] p-8 transition-colors duration-500 hover:bg-[color:var(--accent)]/12">
                  <Check className="h-5 w-5 text-[color:var(--accent)]" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-bold text-on-navy">{b.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-navy-muted">{b.d}</p>
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
