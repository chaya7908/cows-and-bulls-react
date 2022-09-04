import './GameBoard.scss';
import SequenceCode from '../SequenceCode/SequenceCode';
import TrialBoard from '../TrialBoard/TrialBoard';
import OptionsPalette from '../OptionsPalette/OptionsPalette';

interface GameBoardProps {}

function GameBoard() {
  return (<div className="GameBoard">
    <SequenceCode />
    <TrialBoard />
    <OptionsPalette />
  </div>)
};

export default GameBoard;
