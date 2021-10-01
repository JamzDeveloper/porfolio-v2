import React, { useState } from "react";
import { Moon } from "../../../assets/components-svg/Moon";
import { Sun } from "../../../assets/components-svg/Sun";
import "./DarkMode.css";

type stylecss = {
  setProperty: Function;
  getPropertyValue: Function;
};
 const DarkMode = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<Boolean>(true);
  const styleVariables: stylecss = document.documentElement.style;
  const handleClick = (): void => {
    setDarkMode(!darkMode);

    if (darkMode) {
      styleVariables.setProperty("--color-background-primary", "#0A0A17");
      styleVariables.setProperty("--color-text-secondary", "#ffffff");
      styleVariables.setProperty("--color-shadow", "rgba(155, 155, 155, 0.25)");
      return;
    }

    styleVariables.setProperty("--color-background-primary", "#ffffff");
    styleVariables.setProperty("--color-text-secondary", "#0A0A17");
    styleVariables.setProperty("--color-shadow", "rgba(0, 0, 0, 0.25)");
  };

  return (
    <div className="darkmode--container">
      <button className="darkmode--container-button" onClick={handleClick}>
        {darkMode ? (
          <Sun width={37} height={37} />
        ) : (
          <Moon width={37} height={37} />
        )}
      </button>
    </div>
  );
};
export default DarkMode;