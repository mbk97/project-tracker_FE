import { IconButton } from "@mui/material";
import CustomButton from "components/button/CustomButton";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useAppSelector } from "redux/store";
import { useCreateTasks, useEditTask } from "services/queries/task";

interface IProps {
  handlePrevStep: () => void;
  isEditTask?: boolean;
}

const AddTaskStepTwo = ({ handlePrevStep, isEditTask }: IProps) => {
  const { mutate, isLoading } = useCreateTasks();
  const { mutate: editTaskMutate, isLoading: editTaskLoading } = useEditTask();
  const taskData = useAppSelector((state) => state.project.formData);
  console.log(taskData);
  const handleSubmit = () => {
    if (isEditTask) {
      editTaskMutate(taskData);
    } else {
      mutate(taskData);
    }
  };

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
            <p className="text-[14px]">{taskData.projectName}</p>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">Task Name:</p>
            <p className="text-[14px]">{taskData.taskName}</p>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">Start Date:</p>
            <p className="text-[14px]">{taskData.taskStartDate}</p>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">End Date:</p>
            <p className="text-[14px]">{taskData.taskEndDate}</p>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">Task Status:</p>
            <p className="text-[14px]">{taskData.taskStatus}</p>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            <p className="text-[14px] font-bold w-[120px]">Description:</p>
            <p className="text-[14px]">{taskData.taskDescription}</p>
          </div>
        </div>

        <CustomButton
          styles={{
            width: "100%",
            marginTop: "30px",
          }}
          loading={isLoading || editTaskLoading}
          text={isEditTask ? "Update Task" : "Create Task"}
          handleClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default AddTaskStepTwo;
