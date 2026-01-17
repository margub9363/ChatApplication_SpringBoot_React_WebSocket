import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // 🔥 REQUIRED
import AppRoutes from "./config/AppRoutes";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="bottom" />
    <AppRoutes />
  </BrowserRouter>,
);
