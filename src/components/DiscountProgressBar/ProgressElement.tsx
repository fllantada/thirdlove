import React from "react";
import styles from "./ProgressElement.module.css";

interface Props {
  percent: number;
  label: string;
}

const ProgressElement: React.FC<Props> = ({ percent, label }) => {
  console.log("percent: ", percent, "label: ", label);
  return (
    <div className={styles.Container}>
      <div
        className={styles.Filled}
        style={{
          width: `${percent}%`,
        }}
      />
      <div className={styles.Empty} style={{ width: `${100 - percent}%` }} />
    </div>
  );
};

export default ProgressElement;
