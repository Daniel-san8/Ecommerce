import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalContext";
import Cart from "../Carrinho/Carrinho";

const StyledImg = styled.img`
  border-radius: 1rem;
  max-width: 90%;
  margin: 0 auto;
  display: block;
`;

const StyledDivImg = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDadosImagem = styled.div`
  margin: 0 1.5rem;
`;

const StyledPreco = styled.p`
  color: hsl(14, 86%, 42%);
  font-weight: bolder;
`;

const StyledCategory = styled.p`
  color: gray;
`;

const Imagem = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <StyledDivImg>
      {dados.map(({ image, category, name, price }) => {
        return (
          <div key={category}>
            <StyledImg src={image.desktop}></StyledImg>
            {dados && (
              <StyledDadosImagem>
                {category && <StyledCategory>{category}</StyledCategory>}
                {category && (
                  <p>
                    <strong>{name}</strong>
                  </p>
                )}
                {category && <StyledPreco>${price.toFixed(2)}</StyledPreco>}
              </StyledDadosImagem>
            )}
          </div>
        );
      })}
      <Cart />
    </StyledDivImg>
  );
};

export default Imagem;
