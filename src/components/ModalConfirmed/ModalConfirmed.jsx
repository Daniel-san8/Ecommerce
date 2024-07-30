import React from "react";
import "../../styles/reset.css";
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
  const { modalState, setModalState, larguraUsuario } =
    React.useContext(GlobalContext);

  function abreModal() {
    if (classeModal.current) {
      classeModal.current.showModal();
      setModalState(false);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    }
  }

  React.useEffect(() => {
    if (modalState) abreModal();
  }, [modalState]);

  React.useEffect(() => {
    function handleClick({ target }) {
      if (target === classeModal.current && classeModal.current) {
        classeModal.current.close();
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
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
    <StyledDialogStyled $larguraUsuario={larguraUsuario} ref={classeModal}>
      <StyledDivModal ref={divModal} className="reset">
        <StyledModalCart>
          <img
            style={{
              width: "35px",
              height: "35px",
              paddingBottom: ".6rem",
              padding: "0",
              margin: "0",
            }}
            src="./src/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
          />
          <h1 style={{ padding: "0", margin: "0" }}>
            Order <br /> Confirmed
          </h1>
          <StyledParagraphModal className="reset">
            We hope you enjoy your food!
          </StyledParagraphModal>
          <ProdutosModal />
        </StyledModalCart>
      </StyledDivModal>
    </StyledDialogStyled>
  );
};

export default ModalConfirmed;
