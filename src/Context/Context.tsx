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
  const [theme, setTheme] = React.useState<theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
