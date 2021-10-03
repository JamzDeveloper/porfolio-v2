import { createContext, useState, FC } from "react";

//type InputEvent = React.ChangeEvent<HTMLInputElement>;
interface IThemeContext {
  theme: String;
  handleTheme: () => void;
}

const defaultState = {
  theme: "light",
  handleTheme: () => {},
};

// Create context
const ThemeContext = createContext<IThemeContext>(defaultState);

// Create provider

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
