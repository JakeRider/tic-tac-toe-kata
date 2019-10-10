import classNames from 'classnames/bind';
import React from 'react';
import styles from './Controls.module.css';

const cx = classNames.bind(styles);

interface ControlsProps {
  rewindAction?: () => void;
  resetAction?: () => void;
}

function Controls({ rewindAction, resetAction }: ControlsProps): JSX.Element {
  return (
    <div className={cx('controls')}>
      <button type="button" className={cx('button')} onClick={rewindAction}>
        Rewind
      </button>
      <button
        type="button"
        className={cx('button', 'reset')}
        onClick={resetAction}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
