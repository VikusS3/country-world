import Image from "next/image";

import Link from "next/link";
import { useRegion } from "../context/RegionContext";

export default function Countries() {
  const { countries } = useRegion();
  return (
    <>
      <ul
        className={`w-full grid ${
          countries.length === 1
            ? "place-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        } gap-5`}
      >
        {countries.map((country) => (
          <li
            key={country.cca3}
            className="bg-zinc-800/55 transition-all shadow-md rounded-md p-4 flex justify-center items-center flex-col gap-5 hover:bg-zinc-800/80"
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
