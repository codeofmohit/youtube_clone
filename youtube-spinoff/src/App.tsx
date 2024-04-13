import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeContext } from "./theme/themeContext";
import { useState } from "react";
import Theme from "./theme/Theme";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  // handling theme switching dark <-> light
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    }
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleCurrentTheme }}>
      <Theme>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </Theme>
    </ThemeContext.Provider>
  );
}

export default App;
