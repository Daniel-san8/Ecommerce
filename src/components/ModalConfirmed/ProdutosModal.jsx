import React from "react";
import { GlobalContext } from "../../GlobalContext";

const ProdutosModal = () => {
  const { itensNoCarrinho, dados } = React.useContext(GlobalContext);
  return (
    <>
      <div style={{ backgroundColor: "hsl(12, 20%, 44%)" }}>
        {itensNoCarrinho.map(({ name, price, quantidade, id }) => {
          return (
            <div key={id}>
              <img src={dados[id].image.thumbnail} />
              <span>{name} </span>

              <span> {price}</span>
              <br />

              <span>{quantidade}x</span>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProdutosModal;
