import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./styles/global.css";

const container = document.getElementById("root");

const app = (
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}