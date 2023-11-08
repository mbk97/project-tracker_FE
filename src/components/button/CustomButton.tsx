import { CircularProgress } from "@mui/material";
import React from "react";

interface IProps {
  text: any;
  styles?: React.CSSProperties;
  handleClick?: () => void;
  loading?: boolean;
}

const CustomButton = ({ styles, text, handleClick, loading }: IProps) => {
  return (
    <button
      className="h-[40px] px-4 rounded-[10px] whitespace-nowrap bg-[#2a85ff] text-[#ffffff]"
      style={{
        ...styles,
      }}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <CircularProgress
          size={20}
          className="h-6"
          style={{
            color: "#ffffff",
          }}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default CustomButton;
