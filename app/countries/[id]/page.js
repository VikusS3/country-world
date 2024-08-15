// app/countries/[id]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return countries.map((country) => ({
    id: country.cca3,
  }));
}

export default async function CountryPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  if (!res.ok) {
    return notFound();
  }
  const country = await res.json();

  if (!country || country.length === 0) {
    return notFound();
  }

  return (
    <div className="max-w-[85rem] w-full justify-center items-center flex h-screen">
      <div class="parent">
        <div class="div1">
          <p className="text-2xl">
            Capital:{" "}
            <span className="text-base opacity-95">
              {country[0].capital ? country[0].capital : "N/A"}
            </span>
          </p>
          <p className="text-2xl">
            Area:{" "}
            <span className="text-base opacity-95">{country[0].area} km²</span>
          </p>
          <p className="text-2xl">
            Population:{" "}
            <span className="text-base opacity-95">
              {country[0].population}
            </span>
          </p>
          <p className="text-2xl">
            Money:{" "}
            <span className="text-base opacity-95">
              {
                country[0].currencies[Object.keys(country[0].currencies)[0]]
                  .name
              }
            </span>
            <span className="text-base opacity-95">
              {" "}
              (
              {
                country[0].currencies[Object.keys(country[0].currencies)[0]]
                  .symbol
              }
              )
            </span>
          </p>
        </div>
        <div class="div2">
          {" "}
          <h1 className="text-3xl font-bold text-zinc-50">
            {country[0].name.official}
          </h1>
        </div>
        <div class="div3 flex justify-center items-center gap-5">
          <Image
            src={country[0].flags.svg}
            alt={country[0].name.common}
            width={200}
            className="rounded-lg"
            height={200}
          />
          <div>
            <h1 className="text-3xl font-bold text-zinc-50">
              {country[0].name.official}
            </h1>
            <span className="text-lg opacity-90 ">
              {country[0].name.common}
            </span>
          </div>
        </div>
        <div class="div4">
          {
            <ul>
              {Object.entries(country[0].name.nativeName).map(
                ([key, value]) => (
                  <li key={key}>
                    {key}: {value.common}
                  </li>
                )
              )}
            </ul>
          }
        </div>
        <div class="div5">
          <p>Region: {country[0].region}</p>
        </div>
        <div class="div6">
          <p>Subregion: {country[0].subregion}</p>
          <p>Capital: {country[0].capital}</p>
        </div>
      </div>
    </div>
  );
}
