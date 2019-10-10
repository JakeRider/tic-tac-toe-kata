import className from 'classnames/bind';
import React from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

type SquareContent = null | 'X' | 'O';

interface SquareProps {
  index: number;
  currentPlayer: number;
  children?: SquareContent;
  disabled: boolean;
  boardDispatch: any;
}

function Square({
  index,
  currentPlayer,
  children,
  disabled,
  boardDispatch,
}: SquareProps): JSX.Element {
  const handleSquareClick = () => {
    boardDispatch({ type: 'DISABLE', index });
    boardDispatch({
      type: 'UPDATE',
      index,
      value: currentPlayer === 1 ? 'X' : 'O',
    });
  };

  return (
    <button
      disabled={disabled}
      data-testid={`square${index}`}
      className={cx('square')}
      onClick={handleSquareClick}
    >
      {children}
    </button>
  );
}

export default Square;
