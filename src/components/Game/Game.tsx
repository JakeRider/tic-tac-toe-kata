import classNames from 'classnames/bind';
import React from 'react';
import Board from '../Board';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';
import styles from './Game.module.css';

const cx = classNames.bind(styles);

function Game(): JSX.Element {
  return (
    <div className={cx('game')}>
      <InfoPrompter />
      <Board />
      <MoveList className={cx('move-list-1')} />
      <MoveList className={cx('move-list-2')} />
    </div>
  );
}

export default Game;
