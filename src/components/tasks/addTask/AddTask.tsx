import { PageTitle } from "components/text/Text";
import React, { useState } from "react";
import AddTaskStepOne from "./AddTaskStepOne";
import AddTaskStepTwo from "./AddTaskStepTwo";
import { IconButton } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "redux/store";
import { closeAddTaskModal } from "redux/slices/modalSlice";

interface IProps {
  isNewTask?: boolean;
}

const AddTask = ({ isNewTask }: IProps) => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  const handleCloseTaskModal = () => dispatch(closeAddTaskModal());
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <PageTitle text="Add task" />
        <IconButton onClick={handleCloseTaskModal}>
          <AiOutlineCloseCircle />
        </IconButton>
      </div>
      {step === 1 ? (
        <AddTaskStepOne handleNextStep={handleNextStep} isNewTask={isNewTask} />
      ) : (
        <AddTaskStepTwo handlePrevStep={handlePrevStep} />
      )}
    </div>
  );
};

export default AddTask;
