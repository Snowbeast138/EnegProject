import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import "primereact/resources/themes/tailwind-light/theme.css"; /* puedes cambiar el tema */
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduccion from "./pages/Introduccion/Introduccion.tsx";
import Problematizacion from "./pages/Problematizacion/Problematizacion.tsx";
import Planteamiento from "./pages/PlanteamientoProblema/Planteamiento.tsx";
import Justificacion from "./pages/Justificacion/Justificacion.tsx";
import Objetivo from "./pages/Objetivos/Objetivo.tsx";
import Hipotesis from "./pages/Hipotesis/Hipotesis.tsx";
import PropuestaMejora from "./pages/PropuestaMejora/PropuestaMejora.tsx";
import Galeria from "./pages/Galeria/Galeria.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Introduccion",
    element: <Introduccion />,
  },
  {
    path: "/Problematizacion",
    element: <Problematizacion />,
  },
  {
    path: "/Planteamiento",
    element: <Planteamiento />,
  },
  {
    path: "/Justificacion",
    element: <Justificacion />,
  },
  {
    path: "/Objetivos",
    element: <Objetivo />,
  },
  {
    path: "/Hipotesis",
    element: <Hipotesis />,
  },
  {
    path: "/Propuesta",
    element: <PropuestaMejora />,
  },
  {
    path: "/Galeria",
    element: <Galeria />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
