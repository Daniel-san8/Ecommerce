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
  const { dados, totalItems, larguraUsuario } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {dados.map(({ image, category, name, price, id }) => {
        return (
          <StyledDivImg key={category}>
            <StyledImg
              src={
                larguraUsuario <= 375
                  ? image.mobile
                  : larguraUsuario <= 768
                  ? image.tablet
                  : larguraUsuario > 769
                  ? image.desktop
                  : null
              }
            ></StyledImg>
            {totalItems === 0 ? <CarrinhoPronto /> : <CarrinhoOnProduct />}
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
