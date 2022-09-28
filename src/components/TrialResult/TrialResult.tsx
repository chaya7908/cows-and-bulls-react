import React, { FC } from 'react';
import { CheckType } from '../../constants/checkType';
import './TrialResult.scss';

interface TrialResultProps {
  result: CheckType[]
}

const TrialResult: FC<TrialResultProps> = ({result}) => (
  <div className="TrialResult">
    {result.map((res, i) => (
      <div key={i} className={res}></div>
    ))}
  </div>
);

export default TrialResult;
