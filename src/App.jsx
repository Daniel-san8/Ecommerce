import React from "react";
import "./styles/geral.css";
import { GlobalContext, GlobalStorage } from "./GlobalContext";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import ModalConfirmed from "./components/ModalConfirmed/ModalConfirmed";

function App() {
  const [quantidadeDosItens, setQuantidadeDosItens] = React.useState(0);
  return (
    <GlobalStorage>
      <h1 className="titulo">Desserts</h1>
      <Produtos />
      <Carrinho
        quantidadeDosItens={quantidadeDosItens}
        setQuantidadeDosItens={setQuantidadeDosItens}
      />
      {/* <ModalConfirmed /> */}
    </GlobalStorage>
  );
}

export default App;
