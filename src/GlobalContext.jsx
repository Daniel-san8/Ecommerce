import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // Dados da API
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    async function puxarDados() {
      try {
        const dadosOk = await fetch("/src/assets/data/data.json");
        const json = await dadosOk.json();
        setDados(json);
      } catch {
        throw "Deu erro no consumo da API";
      }
    }

    puxarDados();
  }, []);

  // Telas pra responsividade
  const [larguraUsuario, setLarguraUsuario] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function modificaLargura() {
      setLarguraUsuario(window.innerWidth);
    }
    window.addEventListener("resize", modificaLargura);
    return () => {
      removeEventListener("resize", modificaLargura);
    };
  }, [window.innerWidth]);

  //Total de itens no Carrinho

  const [totalItems, setTotalItems] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ dados, larguraUsuario, totalItems }}>
      {children}
    </GlobalContext.Provider>
  );
};
