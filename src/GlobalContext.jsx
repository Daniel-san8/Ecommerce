import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // Dados da API
  const [dados, setDados] = React.useState(null);
  const [ids, setIds] = React.useState([]);

  React.useEffect(() => {
    async function puxarDados() {
      try {
        const dadosOk = await fetch("./src/assets/data/data.json");
        const json = await dadosOk.json();
        const ids = json.map((dado) => dado.id);
        setIds(ids);
        setDados(json);
        console.log(dados);
      } catch (error) {
        console.error("Erro no consumo da API:", error);
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
      window.removeEventListener("resize", modificaLargura);
    };
  }, [larguraUsuario]);

  //Total de itens no Carrinho

  const [totalItems, setTotalItems] = React.useState(0);

  function setarTotal() {
    setTotalItems(totalItems + 1);
  }

  function decremento() {
    setTotalItems(totalItems - 1);
  }

  const [quantidade, setarQuantidade] = React.useState(0);

  function setarQuantidadeGlobal() {
    setarQuantidade(quantidade + 1);
  }

  function tirarQuantidadeGlobal() {
    setarQuantidade(quantidade - 1);
  }

  //Estilo do Cart button

  let [nomeDoProduto, setNomeDoProduto] = React.useState(null);
  let [precoDoProduto, setPrecoDoProduto] = React.useState(null);
  let [quantidadeDoProduto, setQuantidadeDoProduto] = React.useState(0);
  const [itensNoCarrinho, setItensNoCarrinho] = React.useState([]);

  function adicionaProdutosNoCarrinho(id) {
    const produto = dados.find((item) => item.id === id);
    if (!produto) return;

    setItensNoCarrinho((prevItensNoCarrinho) => {
      const itemNoCarrinho = prevItensNoCarrinho.find((item) => item.id === id);

      if (itemNoCarrinho) {
        return prevItensNoCarrinho.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [
          ...prevItensNoCarrinho,
          {
            id: produto.id,
            name: produto.name,
            price: produto.price,
            quantidade: 1,
          },
        ];
      }
    });
    setarTotal();
  }

  function tirarItem(id) {
    const produto = dados.find((item) => item.id === id);
    if (!produto) return;

    setItensNoCarrinho((prevItensNoCarrinho) => {
      const itemNoCarrinho = prevItensNoCarrinho.find((item) => item.id === id);

      if (itemNoCarrinho) {
        return prevItensNoCarrinho.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      }
    });
  }

  function tirarTodosItens(id) {
    const produto = dados.find((item) => item.id === id);
    if (!produto) return;

    setItensNoCarrinho((prevItensNoCarrinho) => {
      const itemNoCarrinho = prevItensNoCarrinho.find((item) => item.id === id);
      if (itemNoCarrinho) {
        setTotalItems((previous) => {
          return previous - itemNoCarrinho.quantidade;
        });
      }
      if (itemNoCarrinho) {
        // Atualiza a quantidade do item para 0
        const atualizados = prevItensNoCarrinho.map((item) =>
          item.id === id ? { ...item, quantidade: 0 } : item
        );

        // Remove o item da lista
        const novosProdutos = atualizados.filter((item) => item.id !== id);

        return novosProdutos;
      }
      return prevItensNoCarrinho;
    });
  }

  //Modal

  const [modalState, setModalState] = React.useState(false);

  function abreModal() {
    setModalState(!modalState);
  }

  //Order total Global

  const [valorTotal, setValorTotal] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        dados,
        larguraUsuario,
        totalItems,
        setarTotal,
        decremento,
        quantidade,
        setarQuantidadeGlobal,
        tirarQuantidadeGlobal,
        adicionaProdutosNoCarrinho,
        setNomeDoProduto,
        setPrecoDoProduto,
        setQuantidadeDoProduto,
        quantidadeDoProduto,
        precoDoProduto,
        nomeDoProduto,
        itensNoCarrinho,
        tirarItem,
        tirarTodosItens,
        modalState,
        abreModal,
        setValorTotal,
        valorTotal,
        setModalState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
