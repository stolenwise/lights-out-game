import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

const restart = () => {
  window.location.reload();
};

function App() {
  return (
      <div className="App">
        <h1>Lights Out</h1>
        <Board  nrows={5} ncols={5} chanceLightStartsOn={0.25} />
        <button onClick={restart}>Restart</button>
      </div>
  );
}

export default App;
