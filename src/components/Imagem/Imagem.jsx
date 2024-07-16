import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalContext";

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
  console.log(dados);
  return (
    <StyledDivImg>
      {dados.map((dado) => {
        return (
          <div key={dado.category}>
            <StyledImg src={dado.image.desktop}></StyledImg>
            {dados && (
              <StyledDadosImagem>
                {dado.category && (
                  <StyledCategory>{dado.category}</StyledCategory>
                )}
                {dado.category && (
                  <p>
                    <strong>{dado.name}</strong>
                  </p>
                )}
                {dado.category && (
                  <StyledPreco>${dado.price.toFixed(2)}</StyledPreco>
                )}
              </StyledDadosImagem>
            )}
          </div>
        );
      })}
    </StyledDivImg>
  );
};

export default Imagem;
