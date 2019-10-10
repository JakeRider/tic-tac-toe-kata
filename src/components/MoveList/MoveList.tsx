import React from 'react';

interface MoveListProps {
  className?: string;
  playerName: string;
}

function MoveList({ className, playerName }: MoveListProps): JSX.Element {
  return (
    <div className={className}>
      <span data-testid="playerName">{playerName}</span>This is a Move List.
    </div>
  );
}

export default MoveList;
