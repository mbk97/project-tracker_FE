import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/svg/logo.svg";
import { navItems } from "./data";
import { NavLink } from "react-router-dom";
import "./style.css";
interface IProps {
  handleOpenMenu?: () => void;
}

const SideBar = ({ handleOpenMenu }: IProps) => {
  return (
    <div className="pr-5 pt-8 h-[100vh]">
      <div className="lg:hidden  mb-5 flex mr-4 justify-end">
        <AiOutlineClose
          onClick={handleOpenMenu}
          className="text-[1.5rem] cursor-pointer text-[#000000]"
        />
      </div>

      <div className="grid  place-items-center">
        <div className="flex gap-3">
          <img src={logo} alt="logo" className="h-7 w-7" />
          <h2 className="font-semibold text-[#000000]">TASK MANAGER</h2>
        </div>

        <ul className="mt-[50px] flex justify-center  flex-col">
          {navItems.map(({ id, text, link, Icon }) => {
            return (
              <li key={id} className="mb-[30px]  text-[grey] text-center  ">
                <NavLink
                  to={link}
                  className={({ isActive }) => (isActive ? "active-menu" : "")}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-[2rem] pl-[10px]" />
                    {text}
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
