import './GameBoard.scss';
import SequenceCode from '../SequenceCode/SequenceCode';
import TrialBoard from '../TrialBoard/TrialBoard';
import OptionsPalette from '../OptionsPalette/OptionsPalette';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { CheckType } from '../../constants/checkType';
import { Colors } from '../../constants/colors.enum';
import { shuffle } from '../../utils/arrayUtils';

interface GameBoardProps {}

function GameBoard(props: any) {

  let sequenceCode: Colors[] = [];
  function saveCode(code: Colors[]){
    sequenceCode = code;
  }

  function checkSequance(sequence: Colors[]): CheckType[] {
    console.log('sequenceCode', sequenceCode)
    console.log('sequence', sequence)
    const result: CheckType[] = [];

    sequence.forEach((color, index) => {
      const codeIndex = sequenceCode.indexOf(color);
      if (codeIndex === index) {
        result.push(CheckType.Correct);
      } else if (codeIndex > -1) {
        result.push(CheckType.Wrong);
      } else {
        result.push(CheckType.None);
      }
    })

    return shuffle(result);
  }

  return (
    <div className="GameBoard">
      <DndProvider backend={HTML5Backend}>
        <SequenceCode codeGenerated={saveCode}/>
        <TrialBoard checkSequance={checkSequance}/>
        <OptionsPalette />
      </DndProvider>
    </div>
  );
};

export default GameBoard;
