import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard  from './components/GameBoard/GameBoard'
import { HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/game" element={<GameBoard />}>
          </Route>
          <Route path="/" element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welocme to <b>Cows And Bulls</b> Game!</p>
              <Link to={`/game`}>Start!</Link>
            </header>
          }>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
