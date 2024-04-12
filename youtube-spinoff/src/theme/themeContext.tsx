import { createContext } from "react";
export const ThemeContext = createContext({
  currentTheme: "light",
  toggleCurrentTheme: () => {},
});
