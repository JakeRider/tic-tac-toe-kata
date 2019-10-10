import classNames from 'classnames/bind';
import React from 'react';
import styles from './InfoPrompter.module.css';

const cx = classNames.bind(styles);

function InfoPrompter(): JSX.Element {
  return <div className={cx('info-prompter')}>This is the Info Prompter.</div>;
}

export default InfoPrompter;
