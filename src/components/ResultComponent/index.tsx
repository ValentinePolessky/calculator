import React from 'react';
import { useSelector } from 'react-redux';
import './ResultComponent.scss';
import { IStoreShape } from '../../redux/types';

const ResultComponent = () => {
  const result = useSelector((state: IStoreShape) => state.calculator.calculatedString);

  return <div className="result">{result}</div>;
};

export default ResultComponent;
