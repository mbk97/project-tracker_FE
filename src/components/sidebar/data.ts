import { ImHome } from "react-icons/im";
import { GiProgression } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

export const navItems = [
  {
    id: 1,
    text: "Home",
    link: "/dashboard/",
    Icon: ImHome,
  },
  {
    id: 2,
    text: "Project",
    link: "/dashboard/project",
    Icon: BsGrid,
  },
  {
    id: 3,
    text: "Tasks",
    link: "/dashboard/tasks",
    Icon: BiTask,
  },
  {
    id: 4,
    text: "Progress",
    link: "/dashboard/progress",
    Icon: GiProgression,
  },
  {
    id: 5,
    text: "Settings",
    link: "/dashboard/settings",
    Icon: AiOutlineSetting,
  },
];
