import classNames from 'classnames/bind';
import React from 'react';
import styles from './App.module.css';

const cx = classNames.bind(styles);

function App(): JSX.Element {
  return <div className={cx('app')}>Hello, World!</div>;
}

export default App;
