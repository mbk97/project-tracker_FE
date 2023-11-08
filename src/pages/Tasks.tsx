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
      <div className=" bg-[#ffffff] w-[400px] md:w-[100%] overflow-x-auto mt-11 rounded-[8px]">
        <table className="w-[100%] h-[300px]">
          <thead>
            <tr>
              {taskHeaderData.map((item) => {
                return (
                  <th
                    style={{
                      fontWeight: 600,
                      borderBottom: "1px solid #e6e6e6",
                      fontSize: "18px",
                      padding: "20px 7px",
                      whiteSpace: "nowrap",
                    }}
                    className=" text-left "
                    key={item.id}
                  >
                    {item?.text}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {taskBodyData.map((item) => {
              return (
                <tr key={item.id} className="data-row">
                  <td className="whitespace-nowrap">{item.taskName}</td>
                  <td className="whitespace-nowrap">{item.name}</td>
                  <td className="whitespace-nowrap">{item.status}</td>
                  <td className="whitespace-nowrap">{item.startDate}</td>
                  <td className="whitespace-nowrap">{item.endDate}</td>
                  <td className="whitespace-nowrap">
                    <ProgressBar progress={item.Progress} />
                  </td>

                  <td>
                    <CustomButton
                      text={"View more"}
                      handleClick={() => {
                        handleOpenTaksDetails(item.name);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
