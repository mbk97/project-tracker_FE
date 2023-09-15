import React, { useState } from "react";
import CustomInput from "../input/CustomInput";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import user from "../../assets/images/user.png";
interface IProps {
  handleOpenMenu: () => void;
}

const Navbar = ({ handleOpenMenu }: IProps) => {
  const [data, setData] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="bg-[#ffffff] h-[80px] py-6 flex items-center justify-between pl-[10px]">
      <div className="flex items-center ">
        <AiOutlineMenuUnfold
          className="text-[1.5rem] cursor-pointer lg:hidden block"
          onClick={handleOpenMenu}
        />
        <CustomInput
          name="search"
          placeholder="Search Project"
          handleChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-5 mr-[10px]">
        <BiBell className="text-[1.5rem] cursor-pointer " />
        <img
          src={user}
          alt="User_image"
          className="h-[30px] rounded-[50%] w-[30px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
