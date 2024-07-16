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

const DadosImagem = styled.div`
  margin: 0 auto;
  background-color: "black";
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
              <DadosImagem>
                {dado.category && <p>{dado.category}</p>}
                {dado.category && (
                  <p>
                    <strong>{dado.name}</strong>
                  </p>
                )}
                {dado.category && <p>R$: {dado.price}</p>}
              </DadosImagem>
            )}
          </div>
        );
      })}
    </StyledDivImg>
  );
};

export default Imagem;
