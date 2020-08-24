import React from 'react';
import { useDispatch } from 'react-redux';
import './KeyPadComponent.scss';
import { calculate, reset, updateCalculationString } from '../../redux/modules/calculator/actions';

const KeyPadComponent = () => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.target as HTMLButtonElement;
    if (name === 'C') {
      dispatch(reset());
      return;
    }
    if (name === '=') {
      dispatch(calculate());
      return;
    }
    dispatch(updateCalculationString(name));
  };

  return (
    <div className="buttonHolder">
      {[
        ['(', ')', 'C', '^'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['.', '0', '=', '/'],
      ].map((row) => (
        <>
          {row.map((el) => (
            <button type="button" name={el} onClick={handleClick}>{el}</button>
          ))}
          <br />
        </>
      ))}
    </div>
  );
};

export default KeyPadComponent;
