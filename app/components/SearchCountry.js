import { useRegion } from "../context/RegionContext";

export default function SearchCountry() {
  const { search, setSearch } = useRegion();
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="w-1/2 p-2 mt-4 rounded-lg text-black"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
