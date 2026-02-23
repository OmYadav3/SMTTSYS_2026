import { setTheme } from "@/app/theme";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setThemeState] = useState(
    localStorage.getItem("theme") || "sageAndOlive"
  );

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleChange = (e) => {
    const value = e.target.value;
    setThemeState(value);
    setTheme(value);
  };

  return (
    <header className="h-20 border-b border-theme flex items-center justify-between px-4 bg-theme">
      <div className="font-semibold">Navbar</div>

      <select
        value={theme}
        onChange={handleChange}
        className="border-2 border-theme bg-theme text-theme px-1 py-1 rounded cursor-pointer outline-none font-bold"
      >
        <option value="sageAndOlive">Sage & Olive</option>
        <option value="Olive">Olive</option>
        <option value="blueWhale">Blue Whale</option>
        <option value="Whale">Whale</option>
        <option value="peachFizz">Peach Fizz</option>
        <option value="whiteBeige">White Beige</option>
        <option value="old-theme">Old theme</option>
      </select>
    </header>
  );
}
