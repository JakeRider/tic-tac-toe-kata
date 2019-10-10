import className from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  contents?: null | 'X' | 'O';
  dataTestID: string;
  onClick: () => void;
}

function Square({
  contents = null,
  onClick,
  dataTestID,
}: SquareProps): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
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
      {contents}
    </button>
  );
}

Square.defaultProps = {
  contents: null,
};

export default Square;
