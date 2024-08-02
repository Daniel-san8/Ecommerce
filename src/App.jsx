import React from "react";
import "./styles/geral.css";
import { GlobalStorage } from "./GlobalContext";
import Produtos from "./components/Produtos/Produtos";
import ModalConfirmed from "./components/ModalConfirmed/ModalConfirmed";

function App() {
  let [larguraUsuario, setLarguraUsuario] = React.useState(innerWidth);

  React.useEffect(() => {
    function atualizaLargura() {
      setLarguraUsuario(innerWidth);
      console.log(larguraUsuario);
    }
    window.addEventListener("resize", atualizaLargura);
    return () => {
      window.removeEventListener("resize", atualizaLargura);
    };
  }, [larguraUsuario]);
  return (
    <GlobalStorage>
      <h1 className={larguraUsuario < 1024 ? "titulo" : "tituloResponse"}>
        Desserts
      </h1>
      <Produtos />
      <ModalConfirmed />
    </GlobalStorage>
  );
}

export default App;
