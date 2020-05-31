import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from './witamy_logo_napis.svg';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';


import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({ children }) => {

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    let offset = window.pageYOffset;
    let height = window.innerHeight;
    if(offset <= height * 0.25) setSticky(false);
    if(offset > height * 0.25 ) setSticky(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return(
    <div className={styles.root}>
      <Header className={isSticky ? clsx(styles.header, styles.sticky) : styles.header}/>
      <Link exact to={process.env.PUBLIC_URL +'/'}><div className={styles.logoContainer}><img className={styles.logo} src={logo} alt='ws_logo' /></div></Link>
      {children}
      <Footer className={styles.footer} />
    </div>
  );
  
};

Component.propTypes = {
  children: PropTypes.node,
}

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
