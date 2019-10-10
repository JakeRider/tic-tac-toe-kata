import classNames from 'classnames/bind';
import React from 'react';
import styles from './InfoPrompter.module.css';

const cx = classNames.bind(styles);

interface InfoPrompterProps {
  children: React.ReactNode;
}

function InfoPrompter({ children }: InfoPrompterProps): JSX.Element {
  return (
    <div data-testid="infoPrompter" className={cx('info-prompter')}>
      {children}
    </div>
  );
}

export default InfoPrompter;
