import { IconButton } from "@mui/material";
import CustomButton from "components/button/CustomButton";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

interface IProps {
  handlePrevStep: () => void;
}

const AddTaskStepTwo = ({ handlePrevStep }: IProps) => {
  return (
    <div className="">
      <IconButton onClick={handlePrevStep}>
        <BsArrowLeftShort />
      </IconButton>

      <p className="mt-6">Preview new task</p>
      <div className="flex flex-col justify-between h-[75vh]">
        <div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">Project Name:</p>
            <p className="text-[14px]">Central repository portal</p>
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
            <p className="text-[14px]">This is the description for this task</p>
          </div>
        </div>

        <CustomButton
          styles={{
            width: "100%",
            marginTop: "30px",
          }}
          text={"Create Task"}
          // handleClick={handleNextStep}
        />
      </div>
    </div>
  );
};

export default AddTaskStepTwo;
