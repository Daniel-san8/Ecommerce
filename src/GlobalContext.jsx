import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    async function puxarDados() {
      try {
        const dadosOk = await fetch("/src/assets/data/data.json");
        const json = await dadosOk.json();
        setDados(json);
        console.log(json);
      } catch {
        throw "Deu erro no consumo da API";
      }
    }

    puxarDados();
  }, []);

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
