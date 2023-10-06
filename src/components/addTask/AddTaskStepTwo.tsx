import { IconButton } from "@mui/material";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

interface IProps {
  handlePrevStep: () => void;
}

const AddTaskStepTwo = ({ handlePrevStep }: IProps) => {
  return (
    <div>
      <IconButton onClick={handlePrevStep}>
        <BsArrowLeftShort />
      </IconButton>

      <p className="mt-6">Preview new task</p>

      <div className="mt-5 flex gap-3 flex-wrap">
        <p className="text-[14px] font-bold w-[120px]">Project Name:</p>
        <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur .</p>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        <p className="text-[14px] font-bold w-[120px]">Task Name:</p>
        <p className="text-[14px]">Lorem ipsum dolor.</p>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        <p className="text-[14px] font-bold w-[120px]">Start Date:</p>
        <p className="text-[14px]">09/10/2023</p>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        <p className="text-[14px] font-bold w-[120px]">End Date:</p>
        <p className="text-[14px]">12/10/2023</p>
      </div>
      <div className="mt-5 flex gap-3 flex-wrap">
        <p className="text-[14px] font-bold w-[120px]">Description:</p>
        <p className="text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea vel
          numquam hic itaque laborum, architecto alias esse iure sapiente iste
          quidem harum aspernatur tempore. Commodi eum ut sed necessitatibus!
        </p>
      </div>
    </div>
  );
};

export default AddTaskStepTwo;
