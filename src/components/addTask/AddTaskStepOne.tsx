import React from "react";
import { CustomInput } from "components/input/CustomInput";
import CustomButton from "components/button/CustomButton";

interface IProps {
  handleNextStep: () => void;
}

const AddTaskStepOne = ({ handleNextStep }: IProps) => {
  return (
    <div>
      <div className="mb-10 mt-9">
        <CustomInput name="project_name" type="text" label="Project name" />
      </div>

      <div className="mb-12">
        <CustomInput name="task_name" type="text" label="Task name" />
      </div>

      <div className="mb-12">
        <CustomInput name="start_date" type="date" label="Start Date" />
      </div>

      <div className="mb-12">
        <CustomInput name="end_date" type="date" label="End Date" />
      </div>

      <div className="mb-12">
        <CustomInput
          name="task_status"
          type="text"
          label="Task status"
          value="In progress"
        />
      </div>

      <div className="mb-12">
        <label htmlFor="" className="inline-block  text-[14px]">
          Description
        </label>
        <textarea className="h-[150px] rounded border w-[100%] p-2 outline-none resize-none"></textarea>
      </div>

      <div className="grid place-items-center">
        <CustomButton
          styles={{
            width: "100%",
          }}
          text={"Proceed"}
          handleClick={handleNextStep}
        />
      </div>
    </div>
  );
};

export default AddTaskStepOne;
