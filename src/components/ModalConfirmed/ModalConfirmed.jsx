import React from "react";
import styled from "styled-components";
import {
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";
import { GlobalContext } from "../../GlobalContext";

const ModalConfirmed = () => {
  const { itensNoCarrinho, dados, larguraUsuario, modalState } =
    React.useContext(GlobalContext);
  console.log(itensNoCarrinho);

  return (
    <>
      <StyledDivModal>
        <StyledModalCart>
          <img
            style={{ width: "35px", height: "35px", paddingBottom: ".6rem" }}
            src="./src/assets/images/icon-order-confirmed.svg"
          />
          <h1>
            Order <br /> Confirmed
          </h1>
          <StyledParagraphModal>
            We hope you enjoy your food!
          </StyledParagraphModal>
        </StyledModalCart>
        <div style={{ backgroundColor: "hsl(12, 20%, 44%)" }}>
          {modalState
            ? itensNoCarrinho.map(({ name, price, quantidade, id }) => {
                return (
                  <div key={id}>
                    <img src={dados[id].image.thumbnail} />
                    <span>{name}</span>
                    <span>{price}</span>
                    <span>{quantidade}</span>
                  </div>
                );
              })
            : null}
        </div>
      </StyledDivModal>
    </>
  );
};

export default ModalConfirmed;
