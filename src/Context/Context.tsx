import React from "react";

type theme = "light" | "dark";

interface iThemeContext {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
}

export const ThemeContext = React.createContext<iThemeContext>({
  theme: "light",
  setTheme: () => {},
});

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context must be contained inside provider");
  return context;
};

export const ThemeStorage = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState<theme>(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) return "light";
    return JSON.parse(localTheme) === "dark" ? "dark" : "light";
  });

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      return;
    }
    return JSON.parse(localTheme) === "dark"
      ? document.querySelector("body")?.setAttribute("data-theme", "dark")
      : document.querySelector("body")?.setAttribute("data-theme", "light");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
