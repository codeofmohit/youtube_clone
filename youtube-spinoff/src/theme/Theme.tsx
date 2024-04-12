import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Theme = ({ children }: { children: React.ReactElement }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme ${theme.currentTheme}`}>
      <div className="dark:text-[#f1f1f1] dark:bg-[#0f0f0f]">{children}</div>
    </div>
  );
};

export default Theme;
