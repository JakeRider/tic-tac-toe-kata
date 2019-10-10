import classNames from 'classnames/bind';
import React from 'react';
import styles from './MoveList.module.css';

const cx = classNames.bind(styles);

interface MoveListProps {
  className?: string;
  playerName: string;
}

function MoveList({ className, playerName }: MoveListProps): JSX.Element {
  return (
    <div className={cx('move-list', className)}>
      <span data-testid="playerName" className={cx('player-name')}>
        {playerName}
      </span>
      This is a Move List.
    </div>
  );
}

export default MoveList;
