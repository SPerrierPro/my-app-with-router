import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

// router creation

const getWeatherOfTheDay = () => {
  return "sunny";
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        /* Retourner voir le workshop aussi car loader peut être global, pas inséré ds un élément mais ds l'app
        Permet de charger bcp de data en amont pour améliorer les perf de l'app*/
        loader: () => {
          return getWeatherOfTheDay();
      },
    },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}