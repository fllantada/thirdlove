import React from "react";
import styles from "./ProgressElement.module.css";

interface Props {
  percent: number;
  label: string;
}

const ProgressElement: React.FC<Props> = ({ percent, label }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.BarContainer}>
        <div
          className={styles.Filled}
          style={{
            width: `${percent}%`,
          }}
        />
        <div className={styles.Empty} style={{ width: `${100 - percent}%` }} />
      </div>
      <div
        className={styles.Label}
        style={{ fontWeight: percent === 100 ? "700" : "400" }}
      >
        ${label} OFF
      </div>
    </div>
  );
};

export default ProgressElement;
