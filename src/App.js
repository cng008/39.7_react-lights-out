import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>Lights Out!</h1>
      <p>
        <b>The puzzle is won when when all of the lights are turned off.</b>{' '}
      </p>
      <p>
        You can click on a cell to toggle that light — but it also toggles the
        light above it, to the left of it, to the right of it, and below it.
      </p>
      <Board />
    </div>
  );
}

export default App;
