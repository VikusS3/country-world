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
    <div className="flex w-full justify-center items-center h-screen">
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
          <div>
            <h1 className="text-3xl font-bold text-zinc-50">
              {country[0].name.official}
            </h1>
            <span className="text-lg opacity-90 ">
              {country[0].name.common}
            </span>
          </div>
        </div>
        <div class="div3 flex justify-center items-center gap-5 bg-zinc-950/95">
          <Image
            src={country[0].flags.svg}
            alt={country[0].name.common}
            className="rounded-lg aspect-auto"
            width={200}
            height={200}
          />
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
      {/* <div class="main-container">
  <div class="grid-container">
    <div class="grid-item"></div>
    <div class="grid-item">Thunderbolt 4</div>
    <div class="grid-item">5 nm process</div>
    <div class="grid-item">800GB/s<br><small>Memory bandwidth</small></div>
    <div class="grid-item">20-core CPU<br><small>Up to</small></div>
    <div class="grid-item large">
      <img src="apple-logo.png" alt="M1 Ultra Logo">
      <p>M1 ULTRA</p>
    </div>
    <div class="grid-item">64-core GPU<br><small>Up to</small></div>
    <div class="grid-item">32-core Neural Engine<br><small>22 trillion operations per second</small></div>
    <div class="grid-item">Secure Enclave</div>
    <div class="grid-item">114 billion Transistors</div>
    <div class="grid-item">2.5TB/s<br><small>Interprocessor bandwidth</small></div>
    <div class="grid-item">UltraFusion architecture</div>
    <div class="grid-item">Industry-leading<br><small>performance per watt</small></div>
    <div class="grid-item">128GB<br><small>Unified memory</small></div>
  </div>
</div> */}
    </div>
  );
}
