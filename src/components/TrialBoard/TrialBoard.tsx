import { Colors } from '../../constants/colors.enum';
import { SEQUENCE_LENGTH } from '../../constants/constants';
import './TrialBoard.scss';
import SequenceItem from '../SequenceItem/SequenceItem';

interface TrialBoardProps {}

function TrialBoard() {
  const sequence: (Colors | undefined)[] = [];
  function init() {
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      sequence.push(undefined);
    }
  }

  init();

  return (
    <div className="TrialBoard">
      {sequence.map((color, i) => (
        <SequenceItem key={i} color={color} visibility={true} droppable={true}></SequenceItem>
      ))}
    </div>
  );
};

export default TrialBoard;
