import React from "react";
import "./styles/geral.css";
import { GlobalStorage } from "./GlobalContext";
import Imagem from "./components/Imagem/Imagem";

function App() {
  return (
    <GlobalStorage>
      <h1>Desserts</h1>
      <Imagem />
    </GlobalStorage>
  );
}

export default App;
