import React, { FC } from 'react';
import './GameBoard.scss';
import SequenceCode from '../SequenceCode/SequenceCode';

interface GameBoardProps {}

function GameBoard() {
  return (<div className="GameBoard">
    <SequenceCode />
  </div>)
};

export default GameBoard;
