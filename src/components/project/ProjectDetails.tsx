import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { MdUpdate } from "react-icons/md";
import CustomButton from "components/button/CustomButton";
import { VscDiffAdded } from "react-icons/vsc";
import { useAppDispatch } from "redux/store";
import {
  closeProjectDetailsModal,
  toggleAddTaskModal,
  toggleEditProjectModal,
} from "redux/slices/modalSlice";
import { convertDate } from "utils/date";
import { useDeleteProject } from "services/queries/project";

interface IProps {
  handleDeleteProjectModal: () => void;
  projectDetail: any;
  handleOpenEditProjectModal: (item: any) => void;
}

const ProjectDetails = ({
  handleDeleteProjectModal,
  handleOpenEditProjectModal,
  projectDetail,
}: IProps) => {
  const data = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch();

  const handleOpenTaskModal = () => {
    dispatch(toggleAddTaskModal());
    dispatch(closeProjectDetailsModal());
  };

  // const handleOpenEditProjectModal = () => {
  //   dispatch(toggleEditProjectModal());
  //   dispatch(closeProjectDetailsModal());
  // };

  const { mutate, isLoading } = useDeleteProject();

  const handleDelete = () => {
    mutate(projectDetail?._id);
  };

  return (
    <div className="md:h-[600px]">
      <List className="w-[300px] ">
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Start Date</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            {convertDate(projectDetail?.startDate)}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">End Date:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            {convertDate(projectDetail?.endDate)}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MdUpdate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Status:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold  ">
            {projectDetail?.status}
          </ListItemText>
        </ListItem>
      </List>
      <div className="mt-2 ml-4">
        <div className="flex gap-2">
          <HiMiniBars3BottomLeft size={18} className="mt-2" />
          <h6 className="text-[20px] font-medium">Description</h6>
        </div>
        <div>
          <p className="mt-4 w-[90%]">{projectDetail?.projectDescription}</p>
        </div>

        <div className="flex gap-2 my-4">
          <VscDiffAdded size={18} className="mt-2" />
          <h6 className="text-[20px] font-medium"> Recently added task</h6>
        </div>

        <ul className="mb-7 ml-4">
          {data.map((item, index) => {
            return (
              <li key={index} className="list-disc">
                Lorem ipsum dolor sit amet consectetur{" "}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center gap-5">
          <CustomButton text="Add Task +" handleClick={handleOpenTaskModal} />
          <CustomButton
            text="Edit Project"
            handleClick={() => handleOpenEditProjectModal(projectDetail)}
          />
          <CustomButton
            text="Delete Project"
            styles={{
              backgroundColor: "red",
              width: "135px",
            }}
            handleClick={() => handleDelete()}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
