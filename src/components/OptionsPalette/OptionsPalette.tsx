import './OptionsPalette.scss';
import SequenceItem from '../SequenceItem/SequenceItem';
import { Colors } from '../../constants/colors.enum';
import { SEQUENCE_LENGTH } from '../../constants/constants';
import { getEnumByIndex } from '../../utils/enumUtils';

interface OptionsPaletteProps {}

function OptionsPalette() {

  const options: Colors[] = [];
  function init() {
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      options.push(getEnumByIndex(Colors, i));
    }
  }

  init();
  
  return (
    <div className="OptionsPalette">
      {options.map((color, i) => (
        <SequenceItem key={i} color={color} visibility={true} draggable={true}></SequenceItem>
      ))}
    </div>
  );
};

export default OptionsPalette;
