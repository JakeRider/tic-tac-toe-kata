import classNames from 'classnames/bind';
import React from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const cx = classNames.bind(styles);

type SquareContent = null | 'X' | 'O';

interface SquareState {
  contents: SquareContent;
  disabled: boolean;
}

type BoardState = SquareState[];
type BoardAction =
  | { type: 'DISABLE'; index: number }
  | { type: 'UPDATE'; index: number; value: SquareContent };

interface BoardProps {
  currentPlayer: number;
  boardState: BoardState;
  boardDispatch: React.Dispatch<BoardAction>;
}

function Board({
  currentPlayer,
  boardState,
  boardDispatch,
}: BoardProps): JSX.Element {
  const squaresList = boardState.map((square, index) => (
    <Square
      key={index}
      index={index}
      disabled={square.disabled}
      currentPlayer={currentPlayer}
      boardDispatch={boardDispatch}
    >
      {square.contents}
    </Square>
  ));

  return <div className={cx('board')}>{squaresList}</div>;
}

export default Board;
