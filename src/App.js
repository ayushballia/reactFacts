import React from "react";
import Main from "./reactFactsSite/Main";
import Navbar from "./reactFactsSite/Navbar";

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  function toggle() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <div className={isDarkMode ? "container dark" : "container"}>
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggle} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}
