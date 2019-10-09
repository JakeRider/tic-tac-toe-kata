import classNames from 'classnames/bind';
import React from 'react';
import Game from '../Game';
import styles from './App.module.css';

const cx = classNames.bind(styles);

function App(): JSX.Element {
  return (
    <div className={cx('app')}>
      <Game />
    </div>
  );
}

export default App;
