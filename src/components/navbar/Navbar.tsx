import React, { useState } from "react";
import { BiBell, BiLogOutCircle } from "react-icons/bi";
import user from "../../assets/images/user.png";
import { getFromLocalStorage } from "utils/storage";
import { useNavigate } from "react-router-dom";
interface IProps {
  handleOpenMenu: () => void;
}

const Navbar = ({ handleOpenMenu }: IProps) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const userData = getFromLocalStorage("user_data");
  const name = userData?.name?.split(" ")[0];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <div className="bg-[#ffffff] h-[80px] py-6 flex items-center justify-between pl-[10px]">
      <div className="flex items-center ">
        <h3 className="font-bold">Hello {name?.toLocaleUpperCase()}</h3>
      </div>
      <div className="flex items-center gap-5 mr-[10px]">
        <BiLogOutCircle
          onClick={handleLogout}
          className="text-[1.5rem] cursor-pointer "
        />
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
