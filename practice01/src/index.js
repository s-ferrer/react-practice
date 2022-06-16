import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
