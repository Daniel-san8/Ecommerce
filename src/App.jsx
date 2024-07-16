import React from "react";
import Title from "./components/Title";
import "./styles/geral.css";
import { GlobalStorage } from "./GlobalContext";
import Nome from "./components/Container/Container";
function App() {
  return (
    <GlobalStorage>
      <Title />
      <Nome />
    </GlobalStorage>
  );
}

export default App;
