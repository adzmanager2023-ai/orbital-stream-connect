import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact MSL Colombo — Logistics, Printing & Advertising Enquiries" },
      {
        name: "description",
        content:
          "Contact MSL Colombo for sea cargo, air cargo, transport, printing and advertising enquiries. Tell us what needs moving.",
      },
      { property: "og:title", content: "Contact MSL Colombo" },
      {
        property: "og:description",
        content: "Send an enquiry for logistics, printing or advertising requirements.",
      },
    ],
  }),
  component: ContactPage,
});

const options = [
  "Sea Cargo",
  "Air Cargo",
  "Transport",
  "Offset Printing",
  "Digital Printing",
  "Advertising Services",
  "Other",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full border-b border-border bg-transparent py-3.5 text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-300 focus:border-[color:var(--accent)]";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title={"Let's Work Together."}
        subtitle="Tell us what you need — logistics, transport, printing or advertising."
        image={heroPort}
        alt="Container port at blue hour"
      />

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 grid-tech-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-primary">Contact MSL Colombo</p>
              <h2 className="display-2 mt-5 text-foreground">Tell us what you need.</h2>
            </Reveal>
            <Reveal delay={110}>
              <ul className="mt-10 border-t border-border">
                {["Sea Cargo", "Air Cargo", "Transport", "Printing", "Advertising"].map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-6 border-b border-border py-4 text-foreground"
                  >
                    <span className="eyebrow text-muted-foreground">{`0${i + 1}`}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <dl className="mt-12 space-y-6">
                {[
                  ["Phone", "[CLIENT PHONE]"],
                  ["Email", "[CLIENT EMAIL]"],
                  ["Address", "[CLIENT ADDRESS]"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="border border-border bg-card p-7 shadow-[var(--shadow-panel)] md:p-10">
              <h3 className="text-2xl font-bold text-foreground">Send an enquiry</h3>
              {sent ? (
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Thank you — your enquiry has been prepared. A member of the MSL Colombo team will
                  follow up.
                </p>
              ) : (
                <form
                  className="mt-8 grid gap-6 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    toast.success("Enquiry ready to send", {
                      description: "Connect an email service to deliver enquiries to your inbox.",
                    });
                  }}
                >
                  <div>
                    <label className="eyebrow text-muted-foreground" htmlFor="name">
                      Name
                    </label>
                    <input id="name" required className={field} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground" htmlFor="company">
                      Company
                    </label>
                    <input id="company" className={field} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={field}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground" htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" type="tel" className={field} placeholder="Phone number" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="eyebrow text-muted-foreground" htmlFor="service">
                      Service Required
                    </label>
                    <select id="service" className={field} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="eyebrow text-muted-foreground" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`${field} resize-none`}
                      placeholder="Tell us about your requirement"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 eyebrow text-primary-foreground transition-colors duration-300 hover:bg-[color:var(--accent)] sm:col-span-2"
                  >
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden surface-navy py-24 md:py-32">
        <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-[color:var(--accent)]">Request a Quote</p>
            <h2 className="display-2 mt-5 text-on-navy">Tell Us What Needs Moving.</h2>
          </Reveal>
          <Reveal delay={140}>
            <QuoteWizard />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
