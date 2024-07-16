import React from "react";
import { GlobalContext } from "../../GlobalContext";

const Nome = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;
  console.log(dados[0]);

  return <span>{dados[0].name}</span>;
};

export default Nome;
