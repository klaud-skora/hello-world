import React from 'react';
import styles from './Header.module.scss';
// import { Navigation } from '../Navigation/Navigation';
import clsx from 'clsx';
const Component = ({className}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <nav className={styles.navigation}>
        <p className={styles.link} >Nasz świat</p>
        <p>Ostatnio w podrózy</p>
      </nav>
    </div>
  );
};

export {
  Component as Header,
  Component as HeaderComponent,
};
