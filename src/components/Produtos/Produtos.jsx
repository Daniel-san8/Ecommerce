import React from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  StyledCategory,
  StyledDadosImagem,
  StyledDivImg,
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
    <>
      {dados.map(({ image, category, name, price, id }) => {
        const itemNoCarrinho = itensNoCarrinho.find((item) => item.id === id);
        let quantity = 0;
        if (itemNoCarrinho) {
          quantity = itemNoCarrinho.quantidade;
        }
        return (
          <StyledDivImg key={category}>
            <StyledImg
              src={
                larguraUsuario <= 420
                  ? image.mobile
                  : larguraUsuario <= 768
                  ? image.tablet
                  : larguraUsuario > 769
                  ? image.desktop
                  : image.thumbnail
              }
            ></StyledImg>
            {<CarrinhoPronto quantidadeCarrinho={quantity} id={id} />}

            {dados && (
              <StyledDadosImagem>
                {category && <StyledCategory>{category}</StyledCategory>}
                {category && <StyledName>{name}</StyledName>}
                {category && <StyledPreco>${price.toFixed(2)}</StyledPreco>}
              </StyledDadosImagem>
            )}
          </StyledDivImg>
        );
      })}
      {totalItems === 0 ? (
        <Carrinho />
      ) : (
        <CarrinhoProduto
          precoDoProduto={precoDoProduto}
          nomeDoProduto={nomeDoProduto}
          totalItems={totalItems}
          itensNoCarrinho={itensNoCarrinho}
          tirarTodosItens={tirarTodosItens}
        />
      )}
    </>
  );
};

export default Produtos;
