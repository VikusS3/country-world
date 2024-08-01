import Image from "next/image";

import Link from "next/link";
import { useCountries } from "../hooks/useCountries";

export default function Countries() {
  const { data } = useCountries();
  return (
    <>
      <h1 className="text-4xl font-bold">Paises del mundo</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((country) => (
          <li
            key={country.cca3}
            className="bg-zinc-800/55 shadow-md rounded-md p-4 flex flex-col justify-center items-center"
          >
            <Link href={`/countries/${country.cca3}`}>
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                width={200}
                height={200}
              />
              <h2 className="text-xl font-semibold text-white text-center">
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
