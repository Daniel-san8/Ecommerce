import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Header from "./components/Header";

function App() {
  return (
    <GlobalStorage>
      <Header />
    </GlobalStorage>
  );
}

export default App;
