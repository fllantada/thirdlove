import React from "react";
import "./styles/ProgressElement.css";

interface Props {
  percent: number;
  label: string;
}

const ProgressElement: React.FC<Props> = ({ percent, label }) => {
  console.log("percent: ", percent, "label: ", label);
  return (
    <div className='progress-element-container'>
      <div
        className='progress-element-fill'
        style={{
          width: `${percent}%`,
        }}
      />
      <div
        className='progress-element-empty'
        style={{ width: `${100 - percent}%` }}
      />
    </div>
  );
};

export default ProgressElement;
