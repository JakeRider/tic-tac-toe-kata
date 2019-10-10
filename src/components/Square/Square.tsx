import className from 'classnames/bind';
import React from 'react';
import styles from './Square.module.css';

const cx = className.bind(styles);

function Square(): JSX.Element {
  return <div className={cx('square')}>Square</div>;
}

export default Square;
