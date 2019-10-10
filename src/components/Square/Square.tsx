import className from 'classnames/bind';
import React from 'react';
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
  return (
    <button data-testid={dataTestID} className={cx('square')} onClick={onClick}>
      {contents}
    </button>
  );
}

Square.defaultProps = {
  contents: null,
};

export default Square;
