import React from "react";
import styled from "styled-components";
import { StyledDivModal, StyledModalCart } from "./StyledModalConfirmed";

const ModalConfirmed = () => {
  return (
    <>
      <StyledDivModal>
        <StyledModalCart>
          <img src="./src/assets/images/icon-order-confirmed.svg" />
          <h1>
            Order <br /> Confirmed
          </h1>
          <p>We hope you enjoy your food!</p>
        </StyledModalCart>
      </StyledDivModal>
    </>
  );
};

export default ModalConfirmed;
