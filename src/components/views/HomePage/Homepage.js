import React from 'react';

import logo from './witamy_logo_napis.svg';
import { Header } from '../../layout/Header/Header'; 
import styles from './Homepage.module.scss';
import image from './ws.jpeg';

class Component extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.logoContainer}><img className={styles.logo} src={logo} alt='ws_logo' /></div>
        <div className={styles.mainImageContainer}>
          <img className={styles.mainImage} src={image} alt='witamy_świat' />
          <Header className={styles.header}/>
        </div>
        
      </div>
    );
  }
}
export {
  Component as Homepage,
  Component as HomepageComponent,
};
