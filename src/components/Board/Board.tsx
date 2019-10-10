import React from 'react';
import Square from '../Square';

function Board(): JSX.Element {
  const range = [...Array(9).keys()];

  return (
    <div>
      {range.map(index => (
        <Square key={index} />
      ))}
    </div>
  );
}

export default Board;
