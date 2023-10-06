import React from "react";

interface IProps {
  progress: any;
}

const ProgressBar = ({ progress }: IProps) => {
  let progressBarColorClass;
  const progressBarWidth = progress;

  console.log(progressBarWidth);

  if (progress > 70) {
    progressBarColorClass = "#55ef5a"; // Green when progress is above 70
  } else if (progress <= 50) {
    progressBarColorClass = "#ef5555"; // Red when progress is less than 50
  } else {
    progressBarColorClass = "#f8f807"; // Yellow when progress is between 50 and 70
  }

  return (
    <div className="w-[150px] rounded flex gap-2 items-center">
      <span>{`${progressBarWidth}%`}</span>
      <div
        className={`h-[4px] rounded`}
        style={{
          width: `${progressBarWidth}%`,
          background: progressBarColorClass,
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
