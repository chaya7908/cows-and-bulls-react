import './GameBoard.scss';
import SequenceCode from '../SequenceCode/SequenceCode';
import TrialBoard from '../TrialBoard/TrialBoard';
import OptionsPalette from '../OptionsPalette/OptionsPalette';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface GameBoardProps {}

function GameBoard() {


  return (
    <div className="GameBoard">
      <DndProvider backend={HTML5Backend}>
        <SequenceCode />
        <TrialBoard />
        <OptionsPalette />
      </DndProvider>
    </div>
  );
};

export default GameBoard;
