/* Chargement quand click sur un bouton

import { useState } from "react";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const [weather, setWeather] = useState(null as string | null);

  return (
    <>
      <h1>Hello from Home</h1>

      {weather != null ? (
        <p>Today is a {weather} day</p>
      ) : (
        <button
          type="button"
          onClick={() => {
            const weatherOfTheDay = getWeatherOfTheDay();

            setWeather(weatherOfTheDay);
          }}
        >
          Get Weather
        </button>
      )}
    </>
  );
}

export default Home; */

/* Chargement au chargement de la page avec un useEffect sans user action, mais fait d'abord un render "à vide"

import { useEffect, useState } from "react";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const [weather, setWeather] = useState(null as string | null);

  useEffect(() => {
    const weatherOfTheDay = getWeatherOfTheDay();

    setWeather(weatherOfTheDay);
  }, []);

  return (
    <>
      <h1>Hello from Home</h1>

      {weather != null && <p>Today is a {weather} day</p>}
    </>
  );
}

export default Home;
*/

/* Page rendue avec le loader présent dans le main.tsx avec le hook useLoaderData qui récupère la fonction contenue dans main, qui charge les données AVANT le rendu de la page, donc plus fluide
Plus besoin de rendu conditionnel pour éviter les null au premier affichage*/

import { useLoaderData } from "react-router";

function Home() {
  const weather = useLoaderData() as string;

  return (
    <>
      <h1>Hello from Home</h1>
      <p>Today is a {weather} day</p>
    </>
  );
}

export default Home;