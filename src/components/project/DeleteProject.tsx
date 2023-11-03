import CustomButton from "components/button/CustomButton";
import React from "react";
import { closeDeleteProjectModal } from "redux/slices/modalSlice";
import { useAppDispatch } from "redux/store";

const DeleteProject = () => {
  const dispatch = useAppDispatch();

  const handleCloseDeleteProjectModal = () => {
    dispatch(closeDeleteProjectModal());
  };
  return (
    <div className=" flex justify-center items-center my-5 flex-col">
      <p>Are you sure you want to delete this project?</p>
      <div className="mt-7 flex gap-5">
        <CustomButton
          text={"Cancel"}
          handleClick={handleCloseDeleteProjectModal}
        />
        <CustomButton
          text={"Delete"}
          styles={{
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export default DeleteProject;
