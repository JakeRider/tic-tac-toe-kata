import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Board from '../Board';
import Controls from '../Controls';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';
import styles from './Game.module.css';

const cx = classNames.bind(styles);

function Game(): JSX.Element {
  const [activePlayer, setActivePlayer] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false);
  const [ellapsedMoves, setEllapsedMoves] = useState(0);

  const handleSquareClick = () => {
    setEllapsedMoves(prevState => prevState + 1);
    setActivePlayer(prevState => (prevState === 1 ? 2 : 1));
  };

  return (
    <div className={cx('game')}>
      <InfoPrompter>
        {ellapsedMoves === 9 && "It's a tie!"}
        {ellapsedMoves !== 9 &&
          isGameWon &&
          `Player ${activePlayer === 1 ? 2 : 1} Wins!`}
        {ellapsedMoves !== 9 && !isGameWon && `Player ${activePlayer}'s Turn`}
      </InfoPrompter>
      <Board
        currentPlayer={activePlayer}
        squaresClickHandler={handleSquareClick}
        setIsGameWon={setIsGameWon}
      />
      <Controls />
      <MoveList className={cx('move-list-1')} playerName="Player 1" />
      <MoveList className={cx('move-list-2')} playerName="Player 2" />
    </div>
  );
}

export default Game;
