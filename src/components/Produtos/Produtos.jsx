import React from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  StyledCategory,
  StyledDadosImagem,
  StyledDivImg,
  StyledDivPrincipal,
  StyledImg,
  StyledName,
  StyledPreco,
} from "./ComponentsImagem";

import CarrinhoPronto from "../Carrinho/CarrinhoPronto";
import Carrinho from "../Carrinho/Carrinho";
import CarrinhoProduto from "../Carrinho/CarrinhoProduto";

const Produtos = () => {
  const {
    dados,
    larguraUsuario,
    precoDoProduto,
    nomeDoProduto,
    itensNoCarrinho,
    totalItems,
    tirarTodosItens,
  } = React.useContext(GlobalContext);

  if (dados === null) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: larguraUsuario >= 1024 ? "row" : "column",
      }}
    >
      <StyledDivPrincipal
        $larguraUsuario={larguraUsuario}
        style={{ flex: "1" }}
      >
        {dados.map(({ image, category, name, price, id }) => {
          const itemNoCarrinho = itensNoCarrinho.find((item) => item.id === id);
          let quantity = 0;
          if (itemNoCarrinho) {
            quantity = itemNoCarrinho.quantidade;
          }
          return (
            <StyledDivImg $larguraUsuario={larguraUsuario} key={category}>
              <StyledImg
                $larguraUsuario={larguraUsuario}
                on={quantity}
                src={
                  larguraUsuario <= 420
                    ? image.mobile
                    : larguraUsuario <= 768
                    ? image.tablet
                    : larguraUsuario > 769
                    ? image.desktop
                    : image.desktop
                }
              ></StyledImg>
              {<CarrinhoPronto quantidadeCarrinho={quantity} id={id} />}

              {dados && (
                <StyledDadosImagem $larguraUsuario={larguraUsuario}>
                  {category && <StyledCategory>{category}</StyledCategory>}
                  {category && <StyledName>{name}</StyledName>}
                  {category && <StyledPreco>${price.toFixed(2)}</StyledPreco>}
                </StyledDadosImagem>
              )}
            </StyledDivImg>
          );
        })}
      </StyledDivPrincipal>

      <div style={{ flex: "0 0 auto" }}>
        {totalItems === 0 ? (
          <div style={{ display: "block" }}>
            <Carrinho />
          </div>
        ) : (
          <CarrinhoProduto
            precoDoProduto={precoDoProduto}
            nomeDoProduto={nomeDoProduto}
            totalItems={totalItems}
            itensNoCarrinho={itensNoCarrinho}
            tirarTodosItens={tirarTodosItens}
          />
        )}
      </div>
    </div>
  );
};

export default Produtos;
