import React from 'react';
import styles from './Navigation.module.scss';

class Component extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <nav></nav>
      </div>
    );
  }

}

export {
  Component as Navigation,
  Component as NavigationComponent,
};
