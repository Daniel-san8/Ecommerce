import React from "react";
import { GlobalContext } from "../../GlobalContext";
import Cart from "../Carrinho/Carrinho";
import {
  StyledCategory,
  StyledDadosImagem,
  StyledDivImg,
  StyledImg,
  StyledName,
  StyledPreco,
} from "./ComponentsImagem";

const Imagem = () => {
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
      <Cart />
    </>
  );
};

export default Imagem;
