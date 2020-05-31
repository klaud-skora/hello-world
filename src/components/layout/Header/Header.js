import React from 'react';
import styles from './Header.module.scss';

import clsx from 'clsx';
const Component = ({className}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <nav className={styles.navigation}>
        <p className={styles.link} >Nasz świat</p>
        <p>Ostatnio w podróży</p>
      </nav>
    </div>
  );
};

export {
  Component as Header,
  Component as HeaderComponent,
};
