import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from './witamy_logo_napis.svg';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';
import { withRouter } from "react-router";

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({ children, location }) => {

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
      <Header className={clsx(isSticky ? clsx(styles.header, styles.sticky) : styles.header, location.pathname !== '/' ? styles.headerTape: '') }/>
      <Link to={process.env.PUBLIC_URL +'/'}><div className={styles.logoContainer}><img className={styles.logo} src={logo} alt='ws_logo' /></div></Link>
      {children}
      <Footer className={location.pathname !== '/' ? clsx(styles.footerTape, styles.footer) : styles.footer} />
    </div>
  );
  
};

Component.propTypes = {
  children: PropTypes.node,
}

const ComponentWithRouter = withRouter(Component);

export {
  ComponentWithRouter as MainLayout,
  Component as MainLayoutComponent,
};
