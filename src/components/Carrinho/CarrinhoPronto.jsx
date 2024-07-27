import React from "react";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";
import CarrinhoOnProduct from "./CarrinhoOnProduct";

const CarrinhoPronto = ({ quantidadeCarrinho, id }) => {
  const {
    setarTotal,
    decremento,
    adicionaProdutosNoCarrinho,
    setQuantidadeDoProduto,
    itensNoCarrinho,
    tirarItem,
  } = React.useContext(GlobalContext);

  const itemNoCarrinho = itensNoCarrinho.find((item) => item.id === id);
  const [itens, setItens] = React.useState(0);

  React.useEffect(() => {
    if (itemNoCarrinho) {
      setItens(itemNoCarrinho.quantidade);
    }
  }, [itemNoCarrinho, itensNoCarrinho]);

  function setarWrapper() {
    setarTotal();
    adicionaProdutosNoCarrinho(id, itens);
  }

  function aumentaQuantidade() {
    setItens(itens + 1);
    setarTotal();
    adicionaProdutosNoCarrinho(id, itens);
  }

  function diminuiQuantidade() {
    tirarItem(id);
    decremento();
    setQuantidadeDoProduto((valorAnterior) => valorAnterior - 1);
  }

  return (
    <>
      {quantidadeCarrinho === 0 ? (
        <StyledContainerButtonCart
          $quantidade={quantidadeCarrinho}
          onClick={setarWrapper}
        >
          <img src="./src/assets/images/icon-add-to-cart.svg" />
          <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
        </StyledContainerButtonCart>
      ) : (
        <CarrinhoOnProduct
          quantidadeItens={quantidadeCarrinho}
          aumentaQuantidade={aumentaQuantidade}
          diminuiQuantidade={diminuiQuantidade}
        />
      )}
    </>
  );
};

export default CarrinhoPronto;
