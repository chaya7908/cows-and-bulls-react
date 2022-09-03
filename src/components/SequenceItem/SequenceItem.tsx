import React, { FC } from 'react';
import './SequenceItem.scss';
import { Colors } from '../../constants/colors.enum';

interface SequenceItemProps {
  color: Colors;
  visibility?: boolean;
}

const SequenceItem: FC<SequenceItemProps> = ({color, visibility}) => (
  <div className="SequenceItem">
    <div className={`color-${color} visibility-${visibility}`}>
      <img src={`${process.env.PUBLIC_URL}/pearls/${visibility === false ? 'unknown' : color}.png`}/>
    </div>
  </div>
);

export default SequenceItem;
