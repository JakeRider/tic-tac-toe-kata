import React from 'react';

interface MoveListProps {
  className?: string;
}

function MoveList({ className }: MoveListProps): JSX.Element {
  return <div className={className}>This is a Move List.</div>;
}

export default MoveList;
