import { PageTitle } from "components/text/Text";
import React, { useState } from "react";
import AddTaskStepOne from "./AddTaskStepOne";
import AddTaskStepTwo from "./AddTaskStepTwo";
import { IconButton } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "redux/store";
import {
  closeAddTaskModal,
  disableAddTaskFromProjectPage,
} from "redux/slices/modalSlice";
import { clearProjectDetailsData } from "redux/slices/projectSlice";

interface IProps {
  isEditTask?: boolean;
  taskDetail?: any;
}

const AddTask = ({ isEditTask, taskDetail }: IProps) => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  const handleCloseTaskModal = () => {
    dispatch(closeAddTaskModal());
    dispatch(disableAddTaskFromProjectPage());
    dispatch(clearProjectDetailsData());
  };
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <PageTitle text={isEditTask ? "Edit Task" : "Add task"} />
        <IconButton onClick={handleCloseTaskModal}>
          <AiOutlineCloseCircle />
        </IconButton>
      </div>
      {step === 1 ? (
        <AddTaskStepOne
          handleNextStep={handleNextStep}
          isEditTask={isEditTask}
          taskDetail={taskDetail}
        />
      ) : (
        <AddTaskStepTwo
          handlePrevStep={handlePrevStep}
          isEditTask={isEditTask}
        />
      )}
    </div>
  );
};

export default AddTask;
