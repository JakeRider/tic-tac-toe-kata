import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const cx = classNames.bind(styles);

interface BoardProps {
  currentPlayer: number;
  squaresClickHandler: () => void;
  setIsGameWon: Function;
}

function Board({
  squaresClickHandler,
  currentPlayer,
  setIsGameWon,
}: BoardProps): JSX.Element {
  const range = [...Array(9).keys()];
  const [squares, setSquares] = useState(Array(9).fill(null));

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

  useEffect(() => {
    const isGameWon = winningCombinations.some(combination => {
      if (combination.every(index => squares[index] === 'X')) {
        return true;
      } else if (combination.every(index => squares[index] === 'O')) {
        return true;
      } else {
        return false;
      }
    });
    setIsGameWon(isGameWon);
  }, [squares, winningCombinations, setIsGameWon]);

  const setSquare = (index: number, value: 'X' | 'O' | null) => {
    setSquares(prevState => {
      const newState = prevState;
      newState[index] = value;
      return newState;
    });
  };

  return (
    <div className={cx('board')}>
      {range.map(index => (
        <Square
          key={index}
          dataTestID={`square${index}`}
          onClick={squaresClickHandler}
          currentPlayer={currentPlayer}
          setSquare={value => setSquare(index, value)}
        />
      ))}
    </div>
  );
}

export default Board;
