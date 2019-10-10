import className from 'classnames/bind';
import React from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

interface SquareProps {
  contents?: null;
}

function Square({ contents = null }: SquareProps): JSX.Element {
  return <div className={cx('square')} />;
}

Square.defaultProps = {
  contents: null,
};

export default Square;
