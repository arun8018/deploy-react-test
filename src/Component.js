import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
export default function Component() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Component</div>
    </>
  );
}
