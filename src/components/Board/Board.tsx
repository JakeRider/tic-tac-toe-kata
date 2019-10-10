import classNames from 'classnames/bind';
import React from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const cx = classNames.bind(styles);

function Board(): JSX.Element {
  const range = [...Array(9).keys()];

  return (
    <div className={cx('board')}>
      {range.map(index => (
        <Square key={index} />
      ))}
    </div>
  );
}

export default Board;
