import { setTheme } from "@/app/theme";
import React, { useState } from "react";

export default function Navbar() {
  const [theme, setThemeState] = useState(
    localStorage.getItem("theme") || "sageAndOlive",
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setThemeState(value);
    setTheme(value);
  };
  return (
    <header className="h-16 border-b border-theme flex items-center justify-between px-4 bg-theme">
      {/* LEFT */}
      <div className="font-semibold">Navbar</div>

      {/* ⭐ THEME DROPDOWN */}
      <select
        value={theme}
        onChange={handleChange}
        className="border border-theme bg-theme text-theme px-2 py-1 rounded cursor-pointer"
      >
        <option value="sageAndOlive">Sage & Olive</option>
        <option value="blueWhale">Blue Whale</option>
        <option value="peachFizz">Peach Fizz</option>
        <option value="whiteBeige">White Beige</option>
      </select>
    </header>
  );
}
