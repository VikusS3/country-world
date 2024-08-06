// app/components/RegionFilterButtons.js
import { regions } from "@/app/constantes";
import React from "react";

export default function RegionFilterButtons({
  selectedRegion,
  setSelectedRegion,
}) {
  return (
    <div className="flex  space-x-4 mb-4">
      {regions.map((region) => (
        <button
          key={region.name}
          className={`${region.color} text-white font-bold py-2 px-4 rounded ${
            selectedRegion === region.name ? "opacity-80 " : ""
          }`}
          onClick={() => setSelectedRegion(region.name)}
        >
          {region.label}
        </button>
      ))}
    </div>
  );
}
