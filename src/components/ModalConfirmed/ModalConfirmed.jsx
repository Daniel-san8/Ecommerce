import React from "react";
import {
  StyledDialog,
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";
import { GlobalContext } from "../../GlobalContext";
import ProdutosModal from "./ProdutosModal";

const ModalConfirmed = () => {
  const classeModal = React.useRef(null);
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

  return (
    <>
      {
        <StyledDialog ref={classeModal}>
          <StyledDivModal>
            <StyledModalCart>
              <img
                style={{
                  width: "35px",
                  height: "35px",
                  paddingBottom: ".6rem",
                }}
                src="./src/assets/images/icon-order-confirmed.svg"
              />
              <h1>
                Order <br /> Confirmed
              </h1>
              <StyledParagraphModal>
                We hope you enjoy your food!
              </StyledParagraphModal>
              <ProdutosModal abreModal={abreModal} />
            </StyledModalCart>
          </StyledDivModal>
        </StyledDialog>
      }
    </>
  );
};

export default ModalConfirmed;
