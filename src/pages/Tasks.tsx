import React, { useState } from "react";
import CustomButton from "components/button/CustomButton";
import LeftModal from "components/customModal/LeftModal";
import AddTask from "components/tasks/addTask/AddTask";
import { PageTitle } from "components/text/Text";
import {
  closeAddTaskModal,
  closeTaskDetailsModal,
  toggleAddTaskModal,
  toggleTaskDetailsModal,
} from "redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/store";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { taskBodyData, taskHeaderData } from "utils/data/tableData";
import ProgressBar from "components/progressBar/ProgressBar";
import CustomModal from "components/customModal/CustomModal";
import TaskDetailsModal from "components/tasks/taskDetails/TaskDetailsModal";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const [isNewTask, setIsNewTask] = useState<boolean>(false);
  const [inputData, setInputData] = useState({
    taskName: "",
    projectName: "",
  });
  const taskModalState = useAppSelector((state) => state.modals.addTaskModal);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const taskDetailsModalState = useAppSelector(
    (state) => state.modals.taskDetailsModal,
  );
  const handleOpenNewTaskModal = () => {
    dispatch(toggleAddTaskModal());
    setIsNewTask(true);
  };
  const handleCloseTaskModal = () => {
    dispatch(closeAddTaskModal());
  };

  const { taskName, projectName } = inputData;

  const handleOpenTaksDetails = (title: string) => {
    dispatch(toggleTaskDetailsModal());
    setTaskTitle(title);
  };

  const handleCloseTaskDetails = () => {
    dispatch(closeTaskDetailsModal());
  };

  return (
    <div>
      <div className="flex justify-between items-center  flex-wrap">
        <PageTitle text="Tasks" />
        <div className="flex gap-4 flex-wrap md:flex-nowrap items-center mt-4">
          <div>
            <input
              disabled={false}
              value={taskName}
              name="taskName"
              onChange={(e: any) => {
                setInputData((prev: any) => ({
                  ...prev,
                  taskName: e.target.value,
                }));
              }}
              className="form-field__input"
              placeholder="Search by task name"
            />
          </div>
          <div className="md:w-[200px] w-[150px]">
            <select
              onChange={(e: any) => {
                setInputData((prev: any) => ({
                  ...prev,
                  projectName: e.target.value,
                }));
              }}
              value={projectName}
              name={"projectName"}
              className="form-field__input select"
            >
              <option disabled>Search by project name</option>
              <option value="hello">hello</option>
              <option value="hello">hello</option>
              <option value="hello">hello</option>
            </select>
          </div>
          <div className="flex items-center justify-center w-[100%] md:w-[120px]">
            <CustomButton
              text="Add task +"
              handleClick={handleOpenNewTaskModal}
            />
          </div>
        </div>
      </div>
      <div>
        <TableContainer
          component={Paper}
          className="w-[900px] overflow-x-scroll mt-11"
        >
          <Table>
            <TableHead>
              <TableRow>
                {taskHeaderData.map((item) => {
                  return (
                    <>
                      <TableCell
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                        key={item.id}
                      >
                        {item?.text}
                      </TableCell>
                    </>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {taskBodyData.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.taskName}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.startDate}</TableCell>
                    <TableCell>{item.endDate}</TableCell>
                    <TableCell>
                      <ProgressBar progress={item.Progress} />
                    </TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <>
                        <AiFillEye
                          size={25}
                          onClick={() => {
                            handleOpenTaksDetails(item.name);
                          }}
                        />
                      </>
                      {/* <>
                        <MdDelete
                          size={25}
                          onClick={() => {
                            handleDeleteProjectModal();
                          }}
                        />
                      </> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <LeftModal open={taskModalState} handleClose={handleCloseTaskModal}>
        <AddTask isNewTask={isNewTask} />
      </LeftModal>
      <CustomModal
        open={taskDetailsModalState}
        handleClose={handleCloseTaskDetails}
        dialogTitle={taskTitle}
      >
        <TaskDetailsModal />
      </CustomModal>
    </div>
  );
};

export default Tasks;
