import React from "react";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h2>Fun facts about React</h2>
      <ul>
        <li>Was realesed in 2013</li>
        <li>Was originally created by Jordan Walkee</li>
        <li>Has well over 100k hits on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousand of enterprise app, including mobile apps</li>
      </ul>
    </main>
  );
}
