import React, { useState } from "react";
import Header from "./Header";

function App() {
  let [counter, setCounter] = useState(0); // retorna [valor, funcaoDeAtualizacao]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
