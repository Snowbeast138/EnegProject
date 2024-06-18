import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import "primereact/resources/themes/tailwind-light/theme.css"; /* puedes cambiar el tema */
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Introduccion",
  },
  {
    path: "/Problematizacion",
  },
  {
    path: "/Planteamiento",
  },
  {
    path: "/Justificacion",
  },
  {
    path: "/Objetivos",
  },
  {
    path: "/Hipotesis",
  },
  {
    path: "/Propuesta",
  },
  {
    path: "/Galeria",
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
