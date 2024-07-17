import React from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  StyledCategory,
  StyledDadosImagem,
  StyledDivImg,
  StyledImg,
  StyledName,
  StyledPreco,
} from "./ComponentsImagem";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "../Carrinho/ButtonImg/ButtonImg";

const Produtos = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {dados.map(({ image, category, name, price }) => {
        return (
          <StyledDivImg key={category}>
            <StyledImg src={image.desktop}></StyledImg>
            <StyledContainerButtonCart>
              <img src="./src/assets/images/icon-add-to-cart.svg" />
              <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
            </StyledContainerButtonCart>
            {dados && (
              <StyledDadosImagem>
                {category && <StyledCategory>{category}</StyledCategory>}
                {category && <StyledName>{name}</StyledName>}
                {category && <StyledPreco>${price.toFixed(2)}</StyledPreco>}
              </StyledDadosImagem>
            )}
          </StyledDivImg>
        );
      })}
    </>
  );
};

export default Produtos;
