import React from 'react';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import clsx from 'clsx';


const Component = ({className}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <p>Copyright © Witamy Świat 2020 All rights reserved.</p>
      <div className={styles.icons}>
        <a className={styles.icon} href="https://www.facebook.com/witamyswiat/">
          <FontAwesomeIcon icon={ faFacebook } />
        </a>
        <a className={styles.icon} href="https://www.instagram.com/witamyswiat/">
          <FontAwesomeIcon icon={ faInstagram } />
        </a>
      </div>
    </div>
  );
};

export {
  Component as Footer,
  Component as FooterComponent,
};
