import className from 'classnames/bind';
import React from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  contents?: null | 'X';
}

function Square({ contents = null }: SquareProps): JSX.Element {
  return <div className={cx('square')}>{contents}</div>;
}

Square.defaultProps = {
  contents: null,
};

export default Square;
