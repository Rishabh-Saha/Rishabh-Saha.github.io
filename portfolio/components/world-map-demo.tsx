"use client";
import WorldMap from "@/components/ui/world-map";

export default function WorldMapDemo() {
  return (
    <div className="w-full px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <WorldMap
          dots={[
            {
              start: {
                lat: 43.6532,
                lng: -79.3832,
              }, // Toronto
              end: {
                lat: 51.5074,
                lng: -0.1278,
              }, // London
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 19.076, lng: 72.8777 }, // Mumbai
            },
            {
              start: { lat: 19.076, lng: 72.8777 }, // Mumbai
              end: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
            },
            {
              start: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            },
            {
              start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              end: { lat: 43.6532, lng: -79.3832 }, // Toronto
            },
            {
              start: { lat: 19.076, lng: 72.8777 }, // Mumbai
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            },
            {
              start: { lat: -13.5319, lng: -71.9675 }, // Cusco
              end: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
            },
            {
              start: { lat: 25.2048, lng: 55.2708 }, // Dubai
              end: { lat: 19.076, lng: 72.8777 }, // Mumbai
            },
            {
              start: { lat: 25.2048, lng: 55.2708 }, // Dubai
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
          ]}
        />
      </div>
    </div>
  );
}
