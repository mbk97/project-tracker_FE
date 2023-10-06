import React from "react";
import { BiEditAlt } from "react-icons/bi";

interface ICardProps {
  title: string;
}
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const ProjectCard = ({ title }: ICardProps) => {
  return (
    <div className="bg-[#ffffff] flex gap-4 md:gap-5 mt-10 p-4 h-[200px] w-[90%] md:w-[250px] rounded-[10px]">
      <div className="flex gap-2">
        <div
          style={{
            backgroundColor: generateRandomColor(),
          }}
          className={`h-[25px] w-[15px] rounded-[4px] `}
        ></div>
      </div>
      <div className="w-[80%] md:w-[200px]">
        <h4 className="mb-[20px] font-semibold">{title}</h4>
        <div className="flex justify-between">
          <p className="text-[#828485]">To Do Task</p>
          <p className="text-[#898f95]">43</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#828485]">In Progress Task</p>
          <p className="text-[#898f95]">33</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#828485]">Completed Task</p>
          <p className="text-[#898f95]">23</p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-[#828485]">Project Progress</p>
          <p className="text-[#7de8a3]">73%</p>
        </div>
      </div>
    </div>
  );
};

const BigTaskCard = ({ title }: ICardProps) => {
  return (
    <div className="bg-[#ffffff] mt-10 h-[70px] flex justify-between w-[90%] p-4 lg:w-[500px] rounded-[10px]">
      <div className="flex items-center gap-10">
        <p>
          <span
            style={{
              backgroundColor: generateRandomColor(),
            }}
            className={`h-[10px] inline-block w-[10px] rounded-[50%] mb-[1px] mr-[10px]`}
          ></span>
          App Development
        </p>
        <h4 className=" font-semibold">{title}</h4>
      </div>
      <div className="flex items-center gap-4">
        <p>March 15, 2023</p>
        <BiEditAlt />
      </div>
    </div>
  );
};

export { ProjectCard, BigTaskCard };