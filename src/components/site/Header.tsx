import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Sea Cargo", to: "/services/sea-cargo" },
  { label: "Air Cargo", to: "/services/air-cargo" },
  { label: "Transport", to: "/services/transport" },
  { label: "Printing Services", to: "/services/printing-services" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const hoverOpen = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setOpen(true);
  };

  const hoverClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 140);
  };

  const navLink =
    "link-underline eyebrow text-on-navy/85 hover:text-on-navy transition-colors duration-300 py-2";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-[color:var(--hairline-navy)] bg-[color:var(--navy-deep)]/92 backdrop-blur-xl shadow-[var(--shadow-header)]"
          : "bg-[color:var(--navy-deep)]/10 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 md:px-8",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="MSL Colombo Home"
          className="flex items-center"
        >
          <img
            src="/msl-logo.png"
            alt="MSL Colombo logo"
            width={620}
            height={300}
            className={cn(
              "w-auto object-contain transition-all duration-500",
              scrolled ? "h-7" : "h-9 md:h-11",
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Main"
        >
          <Link to="/" className={navLink}>
            Home
            <span className="link-underline-bar" />
          </Link>

          <Link to="/about-us" className={navLink}>
            About Us
            <span className="link-underline-bar" />
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={hoverOpen}
            onMouseLeave={hoverClose}
          >
            <Link
              to="/services"
              className={cn(
                navLink,
                "flex items-center gap-1.5",
              )}
              aria-expanded={open}
              aria-haspopup="true"
            >
              Services

              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  open && "rotate-180",
                )}
                aria-hidden="true"
              />

              <span className="link-underline-bar" />
            </Link>

            <div
              className={cn(
                "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0",
              )}
            >
              <div className="glass-panel overflow-hidden rounded-md bg-[color:var(--navy-deep)]/95 p-2">
                <p className="eyebrow px-3 pb-2 pt-2 text-on-navy-muted">
                  Our Divisions
                </p>

                {services.map((s, i) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="group flex items-center justify-between rounded-sm px-3 py-3 text-sm text-on-navy/85 transition-colors duration-300 hover:bg-[color:var(--accent)]/18 hover:text-on-navy"
                  >
                    <span className="flex items-center gap-3">
                      <span className="eyebrow text-on-navy-muted">
                        {`0${i + 1}`}
                      </span>

                      {s.label}
                    </span>

                    <ArrowUpRight
                      className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact-us" className={navLink}>
            Contact Us
            <span className="link-underline-bar" />
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Get a Quote */}
          <Link
            to="/contact-us"
            hash="quote"
            className="group hidden items-center gap-2 border border-[color:var(--hairline-navy)] bg-[color:var(--accent)]/15 px-5 py-3 eyebrow text-on-navy transition-all duration-300 hover:bg-[color:var(--accent)] hover:glow-indigo sm:inline-flex"
          >
            Get a Quote

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center border border-[color:var(--hairline-navy)] text-on-navy lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-[color:var(--hairline-navy)] bg-[color:var(--navy-deep)]/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          menuOpen
            ? "max-h-[560px] opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="px-5 py-4"
          aria-label="Mobile"
        >
          <Link
            to="/"
            className="block border-b border-[color:var(--hairline-navy)] py-4 text-lg text-on-navy"
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="block border-b border-[color:var(--hairline-navy)] py-4 text-lg text-on-navy"
          >
            About Us
          </Link>

          {/* Mobile Services */}
          <div className="border-b border-[color:var(--hairline-navy)]">
            <button
              type="button"
              onClick={() =>
                setServicesOpen((v) => !v)
              }
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between py-4 text-lg text-on-navy"
            >
              Services

              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-400",
                servicesOpen
                  ? "max-h-72"
                  : "max-h-0",
              )}
            >
              <div className="pb-3 pl-4">
                <Link
                  to="/services"
                  className="block py-2.5 text-on-navy-muted"
                >
                  All Services
                </Link>

                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block py-2.5 text-on-navy-muted"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact-us"
            className="block border-b border-[color:var(--hairline-navy)] py-4 text-lg text-on-navy"
          >
            Contact Us
          </Link>

          {/* Mobile Quote Button */}
          <Link
            to="/contact-us"
            hash="quote"
            className="mt-5 flex w-full items-center justify-center gap-2 bg-[color:var(--accent)] px-5 py-4 eyebrow text-accent-foreground"
          >
            Get a Quote

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
