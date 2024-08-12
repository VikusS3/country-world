import { createContext, useState, useContext } from "react";
import { useCountries } from "../hooks/useCountries";

const RegionContext = createContext();

export function RegionProvider({ children }) {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [search, setSearch] = useState("");
  const { data: countries } = useCountries();

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });
  return (
    <RegionContext.Provider
      value={{
        countries: filteredCountries,
        selectedRegion,
        setSelectedRegion,
        search,
        setSearch,
        filteredCountries,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
