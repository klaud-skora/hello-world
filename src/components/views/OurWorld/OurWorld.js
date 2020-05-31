import React from 'react';
import styles from './OurWorld.module.scss';

class Component extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        {/* <img className={styles.mainImage} src={`${process.env.PUBLIC_URL}/images/ws.jpeg`} alt='witamy_świat' /> */}
        <section className={styles.about}>
          <h2>Cześć!</h2>
          <p>Jesteśmy Joachim i Klaudia. Podróże od zawsze były naszą pasją i nieodłączną częścią naszego życia. Każda wyprawa to dla nas wyjątkowa radość, którą chcemy się z wami podzielić. </p>
          <p>Na naszym blogu znajdziecie relacje z podróży, zdjęcia, porady, a także adresy miejsc, które warto zobaczyć, w których można się przespać, czy też te, w których można dobrze zjeść (a to lubimy najbardziej).</p>
          <p>K i J</p>
        </section>
      </div>
    );
  }
}
export {
  Component as OurWorld,
  Component as OurWorldComponent,
};
