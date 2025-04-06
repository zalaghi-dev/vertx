import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesWrapper from "./providers/RoutesWrapper";
import "@/assets/css/tailwind.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesWrapper />
  </StrictMode>
);
