import { useEffect, useState } from "react";

export function useCountries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedCountries = localStorage.getItem("countries");
    if (storedCountries) {
      setData(JSON.parse(storedCountries));
    } else {
      fetchCountries();
    }
  }, []);

  const fetchCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setData(countries);
      localStorage.setItem("countries", JSON.stringify(countries));
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchCountriesForRegion = async (region) => {
  //   const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  //   const countries = await res.json();
  //   setData(countries);
  //   localStorage.setItem("countries", JSON.stringify(countries));
  // };

  return { data };
}
