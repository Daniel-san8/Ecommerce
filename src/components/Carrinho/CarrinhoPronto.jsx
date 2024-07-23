import React from "react";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";
import CarrinhoOnProduct from "./CarrinhoOnProduct";

const CarrinhoPronto = () => {
  const { setarTotal, quantidade } = React.useContext(GlobalContext);
  const [itemCarrinho, setItemCarrinho] = React.useState(quantidade);

  function setarWrapper() {
    setItemCarrinho(itemCarrinho + 1);
    setarTotal();
  }

  return (
    <>
      {itemCarrinho === 0 ? (
        <StyledContainerButtonCart
          $quantidade={itemCarrinho}
          onClick={setarWrapper}
        >
          <img src="./src/assets/images/icon-add-to-cart.svg" />
          <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
        </StyledContainerButtonCart>
      ) : (
        <CarrinhoOnProduct quantidadeItens={1} />
      )}
    </>
  );
};

export default CarrinhoPronto;
