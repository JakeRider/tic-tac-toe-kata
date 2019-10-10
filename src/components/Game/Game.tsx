import classNames from 'classnames/bind';
import React from 'react';
import Board from '../Board';
import Controls from '../Controls';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';
import styles from './Game.module.css';

const cx = classNames.bind(styles);

function Game(): JSX.Element {
  return (
    <div className={cx('game')}>
      <InfoPrompter />
      <Board />
      <Controls />
      <MoveList className={cx('move-list-1')} playerName="Player 1" />
      <MoveList className={cx('move-list-2')} playerName="Player 2" />
    </div>
  );
}

export default Game;
