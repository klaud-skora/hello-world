import React from 'react';
import styles from './Homepage.module.scss';

class Component extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Zapraszamy do śledzenia naszej nieustającej podróży</h2>
        <div className={styles.mainImageContainer}>
          <img className={styles.mainImage} src={`${process.env.PUBLIC_URL}/images/ws.jpeg`} alt='witamy_świat' />
        </div>
      </div>
    );
  }
}
export {
  Component as Homepage,
  Component as HomepageComponent,
};
