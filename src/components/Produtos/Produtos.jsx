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

import CarrinhoPronto from "../Carrinho/CarrinhoPronto";
import CarrinhoOnProduct from "../Carrinho/CarrinhoOnProduct";

const Produtos = () => {
  const { dados, totalItems } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {dados.map(({ image, category, name, price }) => {
        return (
          <StyledDivImg key={category}>
            <StyledImg src={image.desktop}></StyledImg>
            {totalItems >= 1 ? (
              <CarrinhoOnProduct />
            ) : totalItems === 0 ? (
              <CarrinhoPronto />
            ) : null}
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
