import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/msl-logo.png.asset.json";
import { RouteMap } from "./RouteMap";

export function Footer() {
  return (
    <footer className="relative overflow-hidden surface-navy">
      <div className="absolute inset-0 grid-tech opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/20 blur-[120px]"
        aria-hidden="true"
      />
      <RouteMap className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full opacity-25" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-20 md:px-8 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo.url}
              alt="MSL Colombo logo"
              width={620}
              height={300}
              loading="lazy"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-navy-muted">
              Connected logistics, transportation, printing and advertising solutions — coordinated
              by MSL Colombo to keep business moving.
            </p>
            <Link
              to="/contact-us"
              hash="quote"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[color:var(--accent)] pb-1 eyebrow text-on-navy"
            >
              Start an enquiry
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about-us" },
              { label: "Services", to: "/services" },
              { label: "Contact Us", to: "/contact-us" },
            ]}
          />

          <FooterCol
            title="Services"
            links={[
              { label: "Sea Cargo", to: "/services/sea-cargo" },
              { label: "Air Cargo", to: "/services/air-cargo" },
              { label: "Transport", to: "/services/transport" },
              { label: "Printing Services", to: "/services/printing-services" },
            ]}
          />

          <div>
            <h2 className="eyebrow text-on-navy-muted">Contact</h2>
            <ul className="mt-6 space-y-4 text-sm text-on-navy/85">
              <li>
                <span className="block eyebrow text-on-navy-muted">Phone</span>
                [CLIENT PHONE]
              </li>
              <li>
                <span className="block eyebrow text-on-navy-muted">Email</span>
                [CLIENT EMAIL]
              </li>
              <li>
                <span className="block eyebrow text-on-navy-muted">Address</span>
                [CLIENT ADDRESS]
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[color:var(--hairline-navy)] pt-6 text-xs text-on-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MSL Colombo. All Rights Reserved.</p>
          <p className="eyebrow">Connected Business Solutions</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div>
      <h2 className="eyebrow text-on-navy-muted">{title}</h2>
      <ul className="mt-6 space-y-3.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="link-underline inline-block text-sm text-on-navy/85 transition-colors duration-300 hover:text-on-navy"
            >
              {l.label}
              <span className="link-underline-bar" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
