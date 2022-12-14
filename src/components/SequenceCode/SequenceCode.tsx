import './SequenceCode.scss';
import { Colors } from '../../constants/colors.enum';
import { SEQUENCE_LENGTH } from '../../constants/constants';
import { randomEnum } from '../../utils/enumUtils';
import SequenceItem from '../SequenceItem/SequenceItem';

interface SequenceCodeProps {
  codeGenerated: (code: Colors[]) => void;
}

function SequenceCode({ codeGenerated }: SequenceCodeProps) {
  const sequence: Colors[] = [];

  function random() {
    while (sequence.length < SEQUENCE_LENGTH) {
      const val = randomEnum(Colors);
      
      if (sequence.indexOf(val) === -1) {
        sequence.push(val);
      }
    }

    codeGenerated(sequence);
  }

  random();

  return (<div className="SequenceCode">
    {sequence.map((color, i) => 
      <SequenceItem key={i} color={color} visibility={false}></SequenceItem>
    )}
  </div>);
};

export default SequenceCode;
