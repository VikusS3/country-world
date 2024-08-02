import Image from "next/image";

import Link from "next/link";

export default function Countries({ countries, selectedRegion }) {
  const filterCountries = countries.filter((country) => {
    if (selectedRegion === "all") {
      return true;
    }
    return country.region === selectedRegion;
  });
  return (
    <>
      <ul className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filterCountries.map((country) => (
          <li
            key={country.cca3}
            className="bg-zinc-800/55 shadow-md rounded-md p-4 flex justify-center items-center flex-col gap-5"
          >
            <Link
              href={`/countries/${country.cca3}`}
              className="flex  flex-col gap-5 justify-center items-center"
            >
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                width={200}
                loading="lazy"
                height={200}
              />
              <h2 className="text-2xl font-semibold text-white text-center">
                {country.name.common}
              </h2>
              <p className="text-sm text-gray-300 text-center">
                {country.region}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
