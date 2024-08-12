"use client";

import { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { useCountries } from "./hooks/useCountries";
import { RegionProvider } from "./context/RegionContext";

export default function Home() {
  const { data: countries } = useCountries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <RegionProvider>
        <Header />
        <Countries countries={countries} />
      </RegionProvider>
    </main>
  );
}
