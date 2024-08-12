// app/components/Header.js
import React from "react";
import RegionFilterButtons from "../lib/ui/RegionFilterButtons";
import SearchCountry from "./SearchCountry";

export default function Header() {
  return (
    <header className="p-4 w-full justify-center items-center flex flex-col mb-10">
      <RegionFilterButtons />
      <SearchCountry />
    </header>
  );
}
