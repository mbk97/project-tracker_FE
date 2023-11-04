import React from "react";

interface IProps {
  text: any;
  styles?: React.CSSProperties;
  handleClick?: () => void;
}

const CustomButton = ({ styles, text, handleClick }: IProps) => {
  return (
    <button
      className="h-[40px] px-4 rounded-[10px] whitespace-nowrap bg-[#2a85ff] text-[#ffffff]"
      style={{
        ...styles,
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
