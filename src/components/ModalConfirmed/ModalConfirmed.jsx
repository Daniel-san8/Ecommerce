import React from "react";
import {
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";
import { GlobalContext } from "../../GlobalContext";
import ProdutosModal from "./ProdutosModal";

const ModalConfirmed = () => {
  const { modalState, totalItems } = React.useContext(GlobalContext);

  return (
    <>
      {modalState && totalItems > 0 ? (
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
            <ProdutosModal />
          </StyledModalCart>
        </StyledDivModal>
      ) : null}
    </>
  );
};

export default ModalConfirmed;
