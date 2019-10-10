import className from 'classnames/bind';
import React from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  contents?: null | 'X' | 'O';
  onClick: () => void;
}

function Square({ contents = null, onClick }: SquareProps): JSX.Element {
  return (
    <button className={cx('square')} onClick={onClick}>
      {contents}
    </button>
  );
}

Square.defaultProps = {
  contents: null,
};

export default Square;
