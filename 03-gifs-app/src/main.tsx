import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifsApp } from "./GifsApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hello, World!</h1>
    <GifsApp />
  </StrictMode>,
);
