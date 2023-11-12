import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CustomButton from "components/button/CustomButton";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdUpdate } from "react-icons/md";
import { useDeleteTask } from "services/queries/task";
import { convertDate } from "utils/date";

interface IProps {
  taskDetail: any;
  handleOpenEditTaskModal: () => void;
}

const TaskDetailsModal = ({ taskDetail, handleOpenEditTaskModal }: IProps) => {
  const { mutate, isLoading } = useDeleteTask();
  console.log(taskDetail);

  const handleDelete = () => {
    mutate(taskDetail._id);
  };
  return (
    <div className="md:h-[450px]">
      <List className="md:w-[400px] w-[100%]">
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[150px]">Project Name:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            {taskDetail?.projectName}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Start Date:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            {convertDate(taskDetail.taskStartDate)}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">End Date:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            {convertDate(taskDetail.taskEndDate)}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MdUpdate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Status:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold  ">
            {taskDetail.taskStatus}
          </ListItemText>
        </ListItem>
      </List>
      <div className="mt-2 ml-4">
        <div className="flex gap-2">
          <HiMiniBars3BottomLeft size={18} className="mt-2" />
          <h6 className="text-[20px] font-medium">Description</h6>
        </div>
        <div>
          <p className="mt-4 w-[90%]">{taskDetail.taskDescription}</p>
        </div>

        <div className="flex justify-center items-center gap-5 mt-10">
          <CustomButton
            text="Edit Task"
            styles={{
              width: "135px",
            }}
            handleClick={handleOpenEditTaskModal}
          />
          <CustomButton
            text="Delete Task"
            styles={{
              background: "red",
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

export default TaskDetailsModal;
