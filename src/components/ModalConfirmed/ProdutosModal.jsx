import React from "react";
import { GlobalContext } from "../../GlobalContext";

const ProdutosModal = () => {
  const { itensNoCarrinho, dados } = React.useContext(GlobalContext);
  return (
    <>
      <div style={{ backgroundColor: "hsl(12, 20%, 44%)" }}>
        {itensNoCarrinho.map(({ name, price, quantidade, id }) => {
          if (quantidade <= 0) return null;
          return (
            <div key={id}>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  gap: "1rem",
                  fontWeight: "600",
                  fontSize: "13px",
                  transition: "13s",
                }}
              >
                <img
                  style={{ borderRadius: "6px", width: "60px", height: "60px" }}
                  src={dados[id].image.thumbnail}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <span>{name} </span>

                  <span style={{ display: "flex", gap: "1rem" }}>
                    <span>{quantidade}x</span>
                    <span>@ {price.toFixed(2)}</span>
                  </span>
                </div>
                <span
                  style={{
                    display: "block",
                    margin: "auto 0 auto auto",
                  }}
                >
                  58.00
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProdutosModal;
