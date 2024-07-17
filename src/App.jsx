import React from "react";
import "./styles/geral.css";
import { GlobalStorage } from "./GlobalContext";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  return (
    <GlobalStorage>
      <h1>Desserts</h1>
      <Produtos />
      <Carrinho />
    </GlobalStorage>
  );
}

export default App;
