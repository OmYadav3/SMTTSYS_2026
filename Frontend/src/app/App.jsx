import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { loadTheme } from "./theme";

export default function App() {

  useEffect(() => {
    loadTheme();
  },[])

  return <RouterProvider router={router} />;
}


