import classNames from 'classnames/bind';
import React from 'react';
import styles from './Controls.module.css';

const cx = classNames.bind(styles);

function Controls(): JSX.Element {
  return <div className={cx('controls')}>This is the Controls.</div>;
}

export default Controls;
