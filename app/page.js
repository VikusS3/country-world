"use client";

import Countries from "./components/Countries";
import Header from "./components/Header";
import { useCountries } from "./hooks/useCountries";
import { RegionProvider } from "./context/RegionContext";

export default function Home() {
  const { data: countries } = useCountries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 w-full max-w-[95rem] ">
      <RegionProvider>
        <Header />
        <Countries countries={countries} />
      </RegionProvider>
    </main>
  );
}
