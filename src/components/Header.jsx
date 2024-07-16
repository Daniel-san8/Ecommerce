import React from "react";
import { GlobalContext } from "../GlobalContext";

const Header = () => {
  const global = React.useContext(GlobalContext);
  return <header>{global.nome}</header>;
};

export default Header;
