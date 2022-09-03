import React, { FC } from 'react';
import './SequenceCode.scss';
import { Colors } from '../../constants/colors.enum';
import { TRIES_NUMBER, SEQUENCE_LENGTH } from '../../constants/constants';
import { randomEnum } from '../../utils/randomEnum';
import SequenceItem from '../SequenceItem/SequenceItem';

interface SequenceCodeProps {
}

function SequenceCode() {
  const sequence: Colors[] = [];

  function random() {
    while (sequence.length < SEQUENCE_LENGTH) {
      const val = randomEnum(Colors);
      
      if (sequence.indexOf(val) === -1) {
        sequence.push(val);
      }
    }
  }

  random();

  return (<div className="SequenceCode">
    {sequence.map((color, i) => 
      <SequenceItem key={i} color={color} visibility={false}></SequenceItem>
    )}
  </div>);
};

export default SequenceCode;
