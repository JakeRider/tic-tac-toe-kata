import classNames from 'classnames/bind';
import React, { useEffect, useReducer } from 'react';
import Board from '../Board';
import Controls from '../Controls';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';
import styles from './Game.module.css';

const cx = classNames.bind(styles);

type SquareContent = null | 'X' | 'O';

interface SquareState {
  contents: SquareContent;
  disabled: boolean;
}

type BoardState = SquareState[];
type GameAction =
  | { type: 'DISABLE'; index: number }
  | { type: 'UPDATE'; index: number; value: SquareContent }
  | { type: 'WIN' };

interface GameState {
  activePlayer: number;
  board: BoardState;
  ellapsedMoves: number;
  isGameWon: boolean;
}

const initialGameState = {
  activePlayer: 1,
  board: Array(9).fill({ contents: null, disabled: false }),
  ellapsedMoves: 0,
  isGameWon: false,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'DISABLE':
      return {
        ...state,
        board: state.board.map((item, index) =>
          index === action.index ? { ...item, disabled: true } : item
        ),
      };
    case 'UPDATE':
      return {
        ...state,
        activePlayer: state.activePlayer === 1 ? 2 : 1,
        board: state.board.map((item, index) =>
          index === action.index ? { ...item, contents: action.value } : item
        ),
        ellapsedMoves: state.ellapsedMoves + 1,
      };
    case 'WIN':
      return { ...state, isGameWon: true };
    default:
      return state;
  }
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game(): JSX.Element {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const { activePlayer, ellapsedMoves, board, isGameWon } = state;

  useEffect(() => {
    winningCombinations.forEach(combination => {
      if (
        combination.every(index => board[index].contents === 'X') ||
        combination.every(index => board[index].contents === 'O')
      ) {
        dispatch({ type: 'WIN' });
      }
    });
  }, [board]);

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
        boardState={board}
        boardDispatch={dispatch}
      />
      <Controls />
      <MoveList className={cx('move-list-1')} playerName="Player 1" />
      <MoveList className={cx('move-list-2')} playerName="Player 2" />
    </div>
  );
}

export default Game;
