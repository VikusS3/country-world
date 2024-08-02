// app/components/Header.js
import React from "react";
import RegionFilterButtons from "../lib/ui/RegionFilterButtons";

export default function Header({ selectedRegion, setSelectedRegion }) {
  return (
    <header className="p-4 w-full justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Filtrar por Región</h1>
      <RegionFilterButtons
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </header>
  );
}
