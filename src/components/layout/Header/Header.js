import React from 'react';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './Header.module.scss';

import clsx from 'clsx';
const Component = ({className}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <nav className={styles.navigation}>
        <Button component={NavLink} exact to={process.env.PUBLIC_URL +'/nasz-swiat'} activeClassName='active' className={styles.link}>Nasz świat</Button>
        <Button component={NavLink} exact to={process.env.PUBLIC_URL +'/europa'} activeClassName='active' className={styles.link}>Europa</Button>
        <Button component={NavLink} exact to={process.env.PUBLIC_URL +'/posty'} activeClassName='active' className={styles.link}>Posty</Button>
      </nav>
    </div>
  );
};

export {
  Component as Header,
  Component as HeaderComponent,
};
