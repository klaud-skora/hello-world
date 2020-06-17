import React from 'react';
import styles from './Europe.module.scss';

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const Component = () => {
 
  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-16.0, -49.0, 8],
            scale: 700
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  fill="#EAEAEA"
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#032a3f"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        {/* <h2 className={styles.title}>Odwiedzone kraje</h2> */}
      </div>
    </div>
  );
  
}
export {
  Component as Europe,
  Component as EuropeComponent,
};
