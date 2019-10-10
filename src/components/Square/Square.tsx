import className from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  currentPlayer: number;
  dataTestID: string;
  onClick: () => void;
  setSquare: (value: 'X' | 'O' | null) => void;
}

function Square({
  onClick,
  dataTestID,
  currentPlayer,
  setSquare,
}: SquareProps): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false);
  const [squareContents, setSquareContents] = useState<null | 'X' | 'O'>(null);

  const handleClick = () => {
    setSquareContents(currentPlayer === 1 ? 'X' : 'O');
    setIsDisabled(true);
    onClick();
  };

  useEffect(() => {
    setSquare(squareContents);
  }, [squareContents, setSquare]);

  return (
    <button
      disabled={isDisabled}
      data-testid={dataTestID}
      className={cx('square')}
      onClick={handleClick}
    >
      {squareContents}
    </button>
  );
}

Square.defaultProps = {
  contents: null,
};

export default Square;
