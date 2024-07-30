import React from "react";
import {
  StyledDialogStyled,
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";
import { GlobalContext } from "../../GlobalContext";
import ProdutosModal from "./ProdutosModal";

const ModalConfirmed = () => {
  const classeModal = React.useRef(null);
  const divModal = React.useRef(null);
  const { modalState, setModalState } = React.useContext(GlobalContext);

  function abreModal() {
    if (classeModal.current) {
      classeModal.current.showModal();
      setModalState(false);
    }
  }

  React.useEffect(() => {
    if (modalState) abreModal();
  }, [modalState]);

  React.useEffect(() => {
    function handleClick({ target }) {
      if (target === classeModal.current && classeModal.current) {
        classeModal.current.close();
      }
    }

    if (classeModal) {
      classeModal.current.addEventListener("click", handleClick);
    }

    return () => {
      classeModal.current.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <StyledDialogStyled ref={classeModal}>
      <StyledDivModal ref={divModal}>
        <StyledModalCart>
          <img
            style={{
              width: "35px",
              height: "35px",
              paddingBottom: ".6rem",
            }}
            src="./src/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
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
    </StyledDialogStyled>
  );
};

export default ModalConfirmed;
