export const themes = {
  sageAndOlive: { bg: "#B2B49C", text: "#3B3C36" },
  blueWhale: { bg: "#C2CBD3", text: "#313851" },
};

export const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const loadTheme = () => {
  const theme = localStorage.getItem("theme") || "sageAndOlive";
  setTheme(theme);
};
