import { Colors } from '../../constants/colors.enum';
import { SEQUENCE_LENGTH } from '../../constants/constants';
import './TrialBoard.scss';
import SequenceItem from '../SequenceItem/SequenceItem';
import { CheckType } from '../../constants/checkType';

interface TrialBoardProps {
  checkSequance: (sequence: Colors[]) => CheckType[];
}

function TrialBoard({ checkSequance }: TrialBoardProps) {
  const sequence: (Colors | undefined)[] = [];

  function init() {
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      sequence.push(undefined);
    }
  }

  init();

  function itemChanged(index: number, color: Colors) {
    sequence[index] = color;
  }

  function check() {
    const result = checkSequance(sequence as Colors[]);
    console.log(result);
  }

  return (
    <div className="TrialBoard">
      {sequence.map((color, i) => (
        <SequenceItem
          key={i}
          color={color}
          visibility={true}
          onChange={(color: Colors) => itemChanged(i, color)}
        ></SequenceItem>
      ))}

      <button onClick={check}>Check</button>
    </div>
  );
};

export default TrialBoard;
