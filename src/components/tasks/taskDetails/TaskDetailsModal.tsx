import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CustomButton from "components/button/CustomButton";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdUpdate } from "react-icons/md";

const TaskDetailsModal = () => {
  return (
    <div className="md:h-[450px]">
      <List className="md:w-[400px] w-[100%]">
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[150px]">Project Name:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            Central repository
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Start Date:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            10-10-2023
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CiCalendarDate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">End Date:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold ">
            20-10-2023
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MdUpdate size={30} />
          </ListItemIcon>
          <ListItemText className="w-[120px]">Status:</ListItemText>
          <ListItemText className="text-[#000000] font-semibold  ">
            In Progress
          </ListItemText>
        </ListItem>
      </List>
      <div className="mt-2 ml-4">
        <div className="flex gap-2">
          <HiMiniBars3BottomLeft size={18} className="mt-2" />
          <h6 className="text-[20px] font-medium">Description</h6>
        </div>
        <div>
          <p className="mt-4 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deserunt dignissimos obcaecati et quasi. Rem enim cupiditate a iusto
          </p>
        </div>

        <div className="flex justify-center items-center gap-5 mt-10">
          <CustomButton
            text="Edit Task"
            // handleClick={handleOpenEditProjectModal}
          />
          <CustomButton
            text="Delete Task"
            styles={{
              background: "red",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
