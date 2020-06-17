import React, { memo } from "react";
import styles from './Map.module.scss';
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const checkedCountries = ["Italy"];
  

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const Map = ({ setTooltipContent }) => {
  return (
    <div className={styles.map}>
      <ComposableMap 
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-16.0, -48.0, 8],
          scale: 700
        }}
      >
        <Geographies geography={geoUrl}>
        
          {({ geographies }) =>
            geographies
            .filter(c => c.properties.REGION_UN === "Europe")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: checkedCountries.includes(geo.properties.NAME) ? "#032a3f" : "#EAEAEA",
                    outline: "none",
                    stroke: "#032a3f"
                  },
                  hover: {
                    fill: "#aa4b6b",
                    outline: "none",
                    stroke: "#032a3f"
                  },
                  pressed: {
                    fill: "#493240",
                    outline: "none",
                    stroke: "#032a3f"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(Map);
