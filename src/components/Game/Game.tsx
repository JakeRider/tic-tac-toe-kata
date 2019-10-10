import React from 'react';
import Board from '../Board';
import InfoPrompter from '../InfoPrompter';

function Game(): JSX.Element {
  return (
    <div>
      <InfoPrompter />
      <Board />
    </div>
  );
}

export default Game;
