import React from 'react';
import Board from '../Board';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';

function Game(): JSX.Element {
  return (
    <div>
      <InfoPrompter />
      <Board />
      <MoveList />
      <MoveList />
    </div>
  );
}

export default Game;
