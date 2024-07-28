import React from "react";
import "./styles/geral.css";
import { GlobalStorage } from "./GlobalContext";
import Produtos from "./components/Produtos/Produtos";
import ModalConfirmed from "./components/ModalConfirmed/ModalConfirmed";

function App() {
  return (
    <GlobalStorage>
      <h1 className="titulo">Desserts</h1>
      <Produtos />
      {/* <ModalConfirmed /> */}
    </GlobalStorage>
  );
}

export default App;
