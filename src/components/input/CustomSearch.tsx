import React from "react";
import { FiSearch } from "react-icons/fi";
interface IInputProps {
  name: string;
  placeholder: string;
  handleChange?: (e: any) => void;
}

const CustomSearch = ({ name, placeholder, handleChange }: IInputProps) => {
  return (
    <div className="w-[300px] rounded-[10px]  ml-7  items-center flex   bg-[#f4f4f4] h-[35px]">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="bg-[transparent] border-0 rounded-[10px]   outline-0 h-[35px]  p-4"
      />

      <FiSearch className="text-[1.5rem] cursor-pointer" />
    </div>
  );
};

export default CustomSearch;
