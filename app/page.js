"use client";

import { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { useCountries } from "./hooks/useCountries";

export default function Home() {
  const { data: countries } = useCountries();
  const [selectedRegion, setSelectedRegion] = useState("all");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Header
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Countries countries={countries} selectedRegion={selectedRegion} />
    </main>
  );
}
