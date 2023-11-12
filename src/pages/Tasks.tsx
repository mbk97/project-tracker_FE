import React, { useState, useEffect } from "react";
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
import { taskHeaderData } from "utils/data/tableData";
// import ProgressBar from "components/progressBar/ProgressBar";
import CustomModal from "components/customModal/CustomModal";
import TaskDetailsModal from "components/tasks/taskDetails/TaskDetailsModal";
import {
  useGetTaskByProjectId,
  useGetTasks,
  useSearchTask,
} from "services/queries/task";
import { IconButton, Skeleton } from "@mui/material";
import { convertDate } from "utils/date";
import { useGetProjects } from "services/queries/project";
import { BiSearch } from "react-icons/bi";
import { axiosInstance } from "services/axiosConfig";
import { useToast } from "hooks/toast";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "services/queryKeys";
import { updateTaskData } from "redux/slices/projectSlice";
import { getErrorMessage } from "utils/response-helper";

const Tasks = () => {
  const { toastError } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const [taskDetail, setTaskDetail] = useState<any>({});
  const [isEditTask, setIsEditTask] = useState<boolean>(false);
  const [inputData, setInputData] = useState({
    taskName: "",
    projectId: "",
  });
  const { result, isLoading } = useGetTasks();
  const { result: projectData, isLoading: projectLoading } = useGetProjects();
  const {
    executeSearchTask,
    data: newTaskData,
    isLoading: searchLoading,
  } = useSearchTask();
  const { taskName, projectId } = inputData;
  const { data, isLoading: getTaskByProjectIdLoading } =
    useGetTaskByProjectId(projectId);

  const taskModalState = useAppSelector((state) => state.modals.addTaskModal);

  const taskDetailsModalState = useAppSelector(
    (state) => state.modals.taskDetailsModal,
  );
  const handleOpenAddTaskModal = () => {
    dispatch(toggleAddTaskModal());
    setIsEditTask(false);
  };
  const handleOpenEditTaskModal = () => {
    dispatch(toggleAddTaskModal());
    dispatch(closeTaskDetailsModal());
    setIsEditTask(true);
  };
  const handleCloseTaskModal = () => {
    dispatch(closeAddTaskModal());
  };

  const handleOpenTaksDetails = (item: any) => {
    dispatch(toggleTaskDetailsModal());
    setTaskDetail(item);
  };

  const handleCloseTaskDetails = () => {
    dispatch(closeTaskDetailsModal());
  };

  const handleSearch = () => {
    executeSearchTask(taskName);
  };

  const handleSearchByProjectName = async (projectId: string) => {
    try {
      const response = await axiosInstance.get(`/tasks/${projectId}`);
      if (response.status === 200) {
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      console.log(response);
      dispatch(updateTaskData(response.data));
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  useEffect(() => {
    if (projectId !== "") {
      handleSearchByProjectName(projectId);
    }
  }, [projectId]);

  return (
    <div>
      <div className="flex justify-between items-center  flex-wrap">
        <PageTitle text="Tasks" />
        <div className="flex gap-4 flex-wrap md:flex-nowrap items-center mt-4">
          <div className="flex gap-2 items-center">
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
            <IconButton onClick={() => handleSearch()}>
              <BiSearch />
            </IconButton>
          </div>
          <div className="md:w-[200px] w-[200px]">
            {projectLoading ? (
              <p>Loading projects....</p>
            ) : (
              <select
                onChange={(e: any) => {
                  setInputData((prev: any) => ({
                    ...prev,
                    projectId: e.target.value,
                  }));
                }}
                value={projectId}
                name={"projectName"}
                className="form-field__input select"
              >
                <option disabled selected value="">
                  Search by project name
                </option>
                {projectData?.map((project: any) => {
                  return (
                    <option value={project._id} key={project._id}>
                      {project.projectName}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <div className="flex items-center justify-center w-[100%] md:w-[120px]">
            <CustomButton
              text="Add task +"
              handleClick={handleOpenAddTaskModal}
            />
          </div>
        </div>
      </div>
      <div className="mt-11">
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width={"auto"}
            height={200}
            animation="wave"
          />
        )}
      </div>
      {!isLoading && result?.length > 0 ? (
        <div className=" bg-[#ffffff] w-[400px] md:w-[100%] overflow-x-auto mt-11 rounded-[8px]">
          <table className="w-[100%] ">
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
                      className="text-left"
                      key={item.id}
                    >
                      {item?.text}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {result?.map((item: any) => {
                return (
                  <tr key={item.id} className="data-row">
                    <td className="whitespace-nowrap">{item.taskName}</td>
                    <td className="whitespace-nowrap">{item.projectName}</td>
                    <td className="whitespace-nowrap">{item.taskStatus}</td>
                    <td className="whitespace-nowrap">
                      {convertDate(item.taskStartDate)}
                    </td>
                    <td className="whitespace-nowrap">
                      {convertDate(item.taskEndDate)}
                    </td>
                    <td>
                      <CustomButton
                        text={"View more"}
                        handleClick={() => {
                          handleOpenTaksDetails(item);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
      <LeftModal open={taskModalState} handleClose={handleCloseTaskModal}>
        <AddTask isEditTask={isEditTask} taskDetail={taskDetail} />
      </LeftModal>
      <CustomModal
        open={taskDetailsModalState}
        handleClose={handleCloseTaskDetails}
        dialogTitle={taskDetail?.taskName}
      >
        <TaskDetailsModal
          taskDetail={taskDetail}
          handleOpenEditTaskModal={handleOpenEditTaskModal}
        />
      </CustomModal>
    </div>
  );
};

export default Tasks;
