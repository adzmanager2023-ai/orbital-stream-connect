import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import seaCargo from "@/assets/sea-cargo.jpg";

export const Route = createFileRoute("/services/sea-cargo")({
  head: () => ({
    meta: [
      { title: "Sea Cargo Solutions | MSL Colombo" },
      {
        name: "description",
        content:
          "Professional sea freight and cargo coordination from MSL Colombo for the reliable movement of goods.",
      },
      { property: "og:title", content: "Sea Cargo Solutions | MSL Colombo" },
      {
        property: "og:description",
        content: "Sea freight and cargo coordination built around reliability and coordination.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      data={{
        eyebrow: "Sea Cargo",
        title: "Sea Cargo Solutions",
        subtitle:
          "Professional sea freight and cargo coordination for reliable movement of goods.",
        image: seaCargo,
        alt: "Container vessel loaded with cargo at sea",
        overviewHeading: "Cargo That Keeps Moving.",
        overview: [
          "MSL Colombo coordinates sea freight movements with a focus on clear communication, careful documentation and dependable handling from booking through to delivery.",
          "Each shipment is planned around your requirement — cargo type, volume, timelines and the parties involved.",
        ],
        benefits: [
          {
            n: "01",
            t: "Coordinated Handling",
            d: "A single point of coordination across the movement of your cargo.",
          },
          {
            n: "02",
            t: "Clear Documentation",
            d: "Careful attention to the paperwork that keeps shipments moving.",
          },
          {
            n: "03",
            t: "Reliable Communication",
            d: "Consistent updates so you always know where your requirement stands.",
          },
        ],
      }}
    />
  ),
});
