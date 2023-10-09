import React from "react";
import { json } from "react-router-dom";

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
  const [theme, setTheme] = React.useState<theme>("light");

  React.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
