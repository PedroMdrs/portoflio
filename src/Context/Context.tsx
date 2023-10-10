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
    const localTheme = JSON.parse(localStorage.getItem("theme") || "");
    if (localTheme === "light") {
      return "light";
    } else {
      return "dark";
    }
  });

  React.useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme") || "");
    if (localTheme === "light") {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
