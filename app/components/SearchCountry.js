import { useRegion } from "../context/RegionContext";
import debounce from "debounce";

export default function SearchCountry() {
  const { search, setSearch } = useRegion();

  // Debounce the search input to avoid making too many requests
  const debouncedSearch = debounce((value) => {
    setSearch(value);
  }, 100);

  // Update the search value
  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="w-1/2 p-2 mt-4 rounded-lg text-black"
      value={search}
      onChange={handleChange}
    />
  );
}
