import React from "react";

interface Props {
  percent: number;
  label: string;
}

const ProgressElement: React.FC<Props> = ({ percent, label }) => {
  console.log("percent: ", percent, "label: ", label);
  return (
    <div className='progress-bar-container'>
      <div
        className='progress-bar-fill'
        style={{
          width: `${percent}%`,
          backgroundColor: "green",
          height: "100%",
        }}
      />
      <div
        className='progress-bar-empty'
        style={{ width: `${100 - percent}%`, backgroundColor: "red" }}
      />
    </div>
  );
};

export default ProgressElement;
