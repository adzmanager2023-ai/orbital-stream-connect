import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type ServiceItem = {
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  to: "/services/sea-cargo" | "/services/air-cargo" | "/services/transport";
};

export function ServicePanel({ item, delay = 0 }: { item: ServiceItem; delay?: number }) {
  return (
    <Reveal delay={delay} as="article">
      <Link
        to={item.to}
        className="group relative block h-full overflow-hidden border border-[color:var(--hairline-navy)] bg-[color:var(--navy-deep)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[color:var(--accent)]/70 hover:glow-indigo"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/25 to-transparent"
            aria-hidden="true"
          />
          <svg
            viewBox="0 0 400 300"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            <path
              d="M20 250 C 130 180, 250 210, 380 60"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.4"
              strokeDasharray="8 8"
              className="animate-dash"
            />
            <circle cx="380" cy="60" r="4" fill="var(--accent)" />
          </svg>
          <span className="absolute left-6 top-6 eyebrow text-on-navy/80">{item.index}</span>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-on-navy md:text-3xl">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-on-navy-muted">{item.description}</p>
          <span className="mt-8 inline-flex items-center gap-2 eyebrow text-[color:var(--accent)]">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
