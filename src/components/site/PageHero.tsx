import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden pt-28 md:min-h-[70vh]">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[color:var(--navy-deep)]/82"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 grid-tech opacity-70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-8 md:pb-24">
        <Reveal>
          <p className="eyebrow text-[color:var(--accent)]">{eyebrow}</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-2 mt-5 max-w-4xl whitespace-pre-line text-on-navy">{title}</h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={170}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-navy-muted md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
