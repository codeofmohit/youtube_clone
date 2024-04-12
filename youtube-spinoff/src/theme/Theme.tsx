import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Theme = ({ children }: { children: React.ReactElement }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme ${theme.currentTheme}`}>
      <div className="dark:text-white">{children}</div>
    </div>
  );
};

export default Theme;
