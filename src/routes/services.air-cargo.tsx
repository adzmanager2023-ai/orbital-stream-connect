import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import airCargo from "@/assets/air-cargo.jpg";

export const Route = createFileRoute("/services/air-cargo")({
  head: () => ({
    meta: [
      { title: "Air Cargo Solutions | MSL Colombo" },
      {
        name: "description",
        content:
          "Efficient air freight solutions from MSL Colombo for time-sensitive business requirements.",
      },
      { property: "og:title", content: "Air Cargo Solutions | MSL Colombo" },
      {
        property: "og:description",
        content: "Air freight coordination for time-sensitive cargo requirements.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      data={{
        eyebrow: "Air Cargo",
        title: "Air Cargo Solutions",
        subtitle: "Efficient air freight solutions for time-sensitive business requirements.",
        image: airCargo,
        alt: "Cargo aircraft being loaded at night",
        overviewHeading: "When Time Is The Cargo.",
        overview: [
          "For requirements where timing matters most, MSL Colombo coordinates air freight movements with careful planning and responsive communication.",
          "We work around your schedule — from booking through handover — keeping the process straightforward for your team.",
        ],
        benefits: [
          {
            n: "01",
            t: "Time-Sensitive Focus",
            d: "Planning shaped around delivery windows and business deadlines.",
          },
          {
            n: "02",
            t: "Responsive Coordination",
            d: "Fast answers and clear next steps at every stage.",
          },
          {
            n: "03",
            t: "Careful Handling",
            d: "Attention to detail from documentation through to handover.",
          },
        ],
      }}
    />
  ),
});
