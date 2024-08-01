// app/countries/[id]/page.js
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
    <div>
      <h1>{country[0].name.common}</h1>
      <p>Region: {country[0].region}</p>
      <p>Subregion: {country[0].subregion}</p>
      <p>Capital: {country[0].capital}</p>
      <p>Population: {country[0].population}</p>
    </div>
  );
}
