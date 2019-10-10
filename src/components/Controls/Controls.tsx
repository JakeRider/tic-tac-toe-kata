import classNames from 'classnames/bind';
import React from 'react';
import styles from './Controls.module.css';

const cx = classNames.bind(styles);

function Controls(): JSX.Element {
  return (
    <div className={cx('controls')}>
      <button type="button" className={cx('button')}>
        Rewind
      </button>
      <button type="button" className={cx('button', 'reset')}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
