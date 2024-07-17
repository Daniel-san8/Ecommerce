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
import Carrinho from "../Carrinho/Carrinho";

const Produtos = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {dados.map(({ image, category, name, price }) => {
        return (
          <StyledDivImg key={category}>
            <StyledImg src={image.desktop}></StyledImg>
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
