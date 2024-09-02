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
    <section className="w-full h-screen flex justify-center items-center gap-10">
      <div>
        <header className="flex flex-col text-center gap-5 items-center justify-center">
          <Image
            src={country[0].flags.svg}
            alt={country[0].name.common}
            width={200}
            height={200}
          />
          <h1 className="text-3xl">{country[0].name.common}</h1>
        </header>
        <main className="flex flex-row gap-12 mt-5 justify-center">
          <div>
            <p className="text-xl ">
              Capital:{" "}
              <span className="text-base text-zinc-100">
                {country[0].capital}
              </span>
            </p>
            <p className="text-xl ">
              Region:{" "}
              <span className="text-base text-zinc-100">
                {country[0].region}
              </span>
            </p>
            <p className="text-xl ">
              Subregion:{" "}
              <span className="text-base text-zinc-100">
                {country[0].subregion}
              </span>
            </p>
            <p className="text-xl ">
              Independent:{" "}
              <span className="text-base text-zinc-100">
                {country[0].independent ? "Yes" : "No"}
              </span>
            </p>
          </div>
          <div>
            <p className="text-xl ">
              Population:{" "}
              <span className="text-base text-zinc-100">
                {country[0].population}
              </span>
            </p>
            <p className="text-xl ">
              Area:{" "}
              <span className="text-base text-zinc-100">
                {country[0].area} km²
              </span>
            </p>
            <p className="text-xl ">
              Timezones:{" "}
              <span className="text-base text-zinc-100">
                {country[0].timezones.join(", ")}
              </span>
            </p>
            <p className="text-xl ">
              Languages:{" "}
              <span className="text-base text-zinc-100">
                {Object.values(country[0].languages)
                  .map((lang) => lang)
                  .join(", ")}
              </span>
            </p>
          </div>
        </main>

        <footer className="flex justify-center mt-5">
          <a
            href={country[0].flags.png}
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-blue-200"
          >
            View flag
          </a>
        </footer>
      </div>
    </section>
  );
}
