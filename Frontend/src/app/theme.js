export const setTheme =(theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

export const loadTheme = () => {
    const theme = localStorage.getItem("theme") || 'sageAndOlive';
    setTheme(theme)
}