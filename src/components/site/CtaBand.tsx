import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { RouteMap } from "./RouteMap";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden surface-navy">
      <div className="absolute inset-0 grid-tech opacity-60" aria-hidden="true" />
      <RouteMap className="pointer-events-none absolute inset-0 h-full w-full opacity-20" />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[color:var(--accent)]/25 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-24 md:flex-row md:items-end md:justify-between md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-[color:var(--accent)]">Next Step</p>
          <h2 className="display-2 mt-5 max-w-2xl text-on-navy">
            Tell us what needs moving.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Link
            to="/contact-us"
            hash="quote"
            className="group inline-flex items-center gap-3 border border-[color:var(--hairline-navy)] bg-[color:var(--accent)]/15 px-8 py-5 eyebrow text-on-navy transition-all duration-300 hover:bg-[color:var(--accent)] hover:glow-indigo"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
