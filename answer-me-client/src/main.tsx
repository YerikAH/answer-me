import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import createRouter from "@/router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={createRouter} />
);
