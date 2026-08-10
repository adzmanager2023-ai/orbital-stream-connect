import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const needs = ["Sea Cargo", "Air Cargo", "Transport", "Printing", "Advertising"] as const;

const steps = ["What do you need?", "Your requirement", "Contact details", "Send"] as const;

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [detail, setDetail] = useState("");
  const [contact, setContact] = useState({ name: "", company: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const toggle = (n: string) =>
    setSelected((prev) => (prev.includes(n) ? prev.filter((p) => p !== n) : [...prev, n]));

  const canNext =
    (step === 0 && selected.length > 0) ||
    (step === 1 && detail.trim().length > 3) ||
    (step === 2 && contact.name.trim() !== "" && contact.email.trim() !== "") ||
    step === 3;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Enquiry ready to send", {
      description: "Connect an email service to deliver enquiries to your inbox.",
    });
  };

  const field =
    "w-full border-b border-[color:var(--hairline-navy)] bg-transparent py-3.5 text-on-navy placeholder:text-on-navy-muted/70 outline-none transition-colors duration-300 focus:border-[color:var(--accent)]";

  return (
    <div className="glass-panel rounded-md p-6 md:p-10">
      {/* Step rail */}
      <ol className="mb-10 grid grid-cols-4 gap-2" aria-label="Enquiry steps">
        {steps.map((s, i) => (
          <li key={s} className="min-w-0">
            <div
              className={cn(
                "h-px w-full transition-colors duration-500",
                i <= step ? "bg-[color:var(--accent)]" : "bg-[color:var(--hairline-navy)]",
              )}
            />
            <p
              className={cn(
                "mt-3 eyebrow transition-colors duration-500",
                i <= step ? "text-on-navy" : "text-on-navy-muted/60",
              )}
            >
              {`0${i + 1}`}
            </p>
            <p className="mt-1 truncate text-xs text-on-navy-muted">{s}</p>
          </li>
        ))}
      </ol>

      {sent ? (
        <div className="py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent)]/20">
            <Check className="h-6 w-6 text-on-navy" />
          </div>
          <h3 className="mt-6 text-2xl text-on-navy">Enquiry prepared.</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm text-on-navy-muted">
            Thank you, {contact.name || "there"}. A member of the MSL Colombo team will follow up on
            your request.
          </p>
        </div>
      ) : (
        <form onSubmit={submit}>
          {step === 0 && (
            <fieldset className="animate-reveal">
              <legend className="text-2xl text-on-navy md:text-3xl">What do you need?</legend>
              <div className="mt-8 flex flex-wrap gap-3">
                {needs.map((n) => {
                  const active = selected.includes(n);
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => toggle(n)}
                      aria-pressed={active}
                      className={cn(
                        "border px-5 py-3.5 text-sm transition-all duration-300",
                        active
                          ? "border-[color:var(--accent)] bg-[color:var(--accent)]/25 text-on-navy glow-indigo"
                          : "border-[color:var(--hairline-navy)] text-on-navy-muted hover:border-[color:var(--accent)]/60 hover:text-on-navy",
                      )}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset className="animate-reveal">
              <legend className="text-2xl text-on-navy md:text-3xl">
                Tell us about your requirement.
              </legend>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                rows={5}
                placeholder="Cargo type, volume, origin and destination, timelines…"
                className={cn(field, "mt-8 resize-none")}
              />
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="animate-reveal">
              <legend className="text-2xl text-on-navy md:text-3xl">Your contact details.</legend>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <input
                  className={field}
                  placeholder="Full name"
                  required
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
                <input
                  className={field}
                  placeholder="Company"
                  value={contact.company}
                  onChange={(e) => setContact({ ...contact, company: e.target.value })}
                />
                <input
                  className={field}
                  type="email"
                  placeholder="Email"
                  required
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
                <input
                  className={field}
                  type="tel"
                  placeholder="Phone"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <div className="animate-reveal">
              <h3 className="text-2xl text-on-navy md:text-3xl">Review &amp; send.</h3>
              <dl className="mt-8 space-y-4 text-sm">
                <Row label="Services" value={selected.join(", ") || "—"} />
                <Row label="Requirement" value={detail || "—"} />
                <Row
                  label="Contact"
                  value={[contact.name, contact.company, contact.email, contact.phone]
                    .filter(Boolean)
                    .join(" · ")}
                />
              </dl>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="group inline-flex items-center gap-2 eyebrow text-on-navy-muted transition-colors duration-300 hover:text-on-navy disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => canNext && setStep((s) => s + 1)}
                disabled={!canNext}
                className="group inline-flex items-center gap-2 bg-[color:var(--accent)] px-7 py-4 eyebrow text-accent-foreground transition-all duration-300 hover:glow-indigo disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-[color:var(--accent)] px-7 py-4 eyebrow text-accent-foreground transition-all duration-300 hover:glow-indigo"
              >
                Send Enquiry
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[color:var(--hairline-navy)] pb-4 sm:flex-row sm:gap-8">
      <dt className="eyebrow w-40 shrink-0 text-on-navy-muted">{label}</dt>
      <dd className="text-on-navy">{value}</dd>
    </div>
  );
}
