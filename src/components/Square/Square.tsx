import className from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  currentPlayer: number;
  dataTestID: string;
  onClick: () => void;
}

function Square({
  onClick,
  dataTestID,
  currentPlayer,
}: SquareProps): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false);
  const [squareContents, setSquareContents] = useState<null | 'X' | 'O'>(null);

  const handleClick = () => {
    setSquareContents(currentPlayer === 1 ? 'X' : 'O');
    setIsDisabled(true);
    onClick();
  };

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
