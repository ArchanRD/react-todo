import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Pages/Header";
import Todos from "./Pages/Todos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Todos /> */}
  </React.StrictMode>
);
