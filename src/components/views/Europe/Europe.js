import React, { useState } from 'react';
import styles from './Europe.module.scss';
import Map from '../../features/Map/Map';
import ReactTooltip from "react-tooltip";

const Component = () => {

  const [content, setContent] = useState("");

  return (
    <div className={styles.root}>
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export {
  Component as Europe,
  Component as EuropeComponent,
};