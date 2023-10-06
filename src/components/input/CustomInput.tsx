import React from "react";

interface IInputProps {
  name: string;
  placeholder?: string;
  handleChange?: (e: any) => void;
  type: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

const CustomInput = ({
  name,
  placeholder,
  handleChange,
  type,
  label,
  value,
  disabled,
}: IInputProps) => {
  return (
    <div className=" w-[100%] rounded-[8px]  items-center    h-[35px]">
      <label htmlFor={label} className="text-[14px] inline-block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        className="bg-[transparent]  border rounded-[10px] w-[100%]  outline-0 h-[35px]  p-2"
      />
    </div>
  );
};

export { CustomInput };
