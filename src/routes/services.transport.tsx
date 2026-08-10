import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import transport from "@/assets/transport.jpg";

export const Route = createFileRoute("/services/transport")({
  head: () => ({
    meta: [
      { title: "Transport Solutions | MSL Colombo" },
      {
        name: "description",
        content:
          "Reliable transportation solutions from MSL Colombo for moving cargo efficiently between destinations.",
      },
      { property: "og:title", content: "Transport Solutions | MSL Colombo" },
      {
        property: "og:description",
        content: "Road transport coordination for efficient cargo movement.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      data={{
        eyebrow: "Transport",
        title: "Transport Solutions",
        subtitle:
          "Reliable transportation solutions for moving cargo efficiently between destinations.",
        image: transport,
        alt: "Logistics truck moving on a highway at dusk",
        overviewHeading: "The Link Between Every Stage.",
        overview: [
          "Transport connects every other part of a logistics movement. MSL Colombo coordinates road transportation so cargo reaches the next stage on schedule.",
          "From collection to delivery, we plan around your operation and keep you informed throughout.",
        ],
        benefits: [
          {
            n: "01",
            t: "Efficient Routing",
            d: "Movements planned around practical timing and access.",
          },
          {
            n: "02",
            t: "Dependable Service",
            d: "Consistent coordination your operation can rely on.",
          },
          {
            n: "03",
            t: "Connected To Freight",
            d: "Transport aligned with your sea and air cargo requirements.",
          },
        ],
      }}
    />
  ),
});
