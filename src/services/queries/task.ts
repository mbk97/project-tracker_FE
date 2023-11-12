import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "hooks/toast";
import {
  // closeAddProjectModal,
  closeAddTaskModal,
  closeEditTaskModal,
  closeTaskDetailsModal,
} from "redux/slices/modalSlice";
import {
  clearFormData,
  clearProjectDetailsData,
  updateTaskData,
} from "redux/slices/projectSlice";
import { useAppDispatch } from "redux/store";
import { axiosInstance } from "services/axiosConfig";
import { taskQueryKeys } from "services/queryKeys";
import { getErrorMessage } from "utils/response-helper";

const useGetTasks = () => {
  const { toastError } = useToast();
  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks");
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { data, isLoading } = useQuery([taskQueryKeys.getTask], fetchTasks);
  const result = data?.data;
  console.log(data);
  return { result, isLoading };
};

const useCreateTasks = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const createProject = async (payload: any) => {
    const body = {
      projectId: payload.projectId,
      projectName: payload.projectName,
      taskName: payload.taskName,
      taskDescription: payload.taskDescription,
      taskStartDate: payload.taskStartDate,
      taskEndDate: payload.taskEndDate,
      taskStatus: payload.taskStatus,
    };
    try {
      const response = await axiosInstance.post("/tasks", body);
      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeAddTaskModal());
        dispatch(clearFormData());
        dispatch(clearProjectDetailsData());
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(createProject);
  return { mutate, isLoading };
};

const useDeleteTask = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const deleteProject = async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/tasks/${id}`);
      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeTaskDetailsModal());
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(deleteProject);
  return { mutate, isLoading };
};

const useGetTaskByProjectId = (id: string | undefined) => {
  const { toastError } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const getTaskByProjectId = async () => {
    try {
      const response = await axiosInstance.get(`/tasks/${id}`);
      if (response.status === 200) {
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      dispatch(updateTaskData(response.data));
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { data, isLoading } = useQuery(["hello", id], getTaskByProjectId, {
    enabled: !!id, // Only enable the query if id is truthy
  });
  return { data, isLoading };
};

const useEditTask = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const editProject = async (payload: any) => {
    const body = {
      projectId: payload.projectId,
      projectName: payload.projectName,
      taskName: payload.taskName,
      taskDescription: payload.taskDescription,
      taskStartDate: payload.taskStartDate,
      taskEndDate: payload.taskEndDate,
      taskStatus: payload.taskStatus,
    };
    try {
      const response = await axiosInstance.put(`/tasks/${payload.id}`, body);
      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeAddTaskModal());
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(editProject);
  return { mutate, isLoading };
};

const useSearchTask = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const searchTask = async (payload: any) => {
    try {
      const response = await axiosInstance.post(
        `/tasks/search?taskName=${payload}`,
      );

      if (response.status === 200) {
        toastSuccess(response.data.message);
        // dispatch(closeAddProjectModal());
        queryClient.invalidateQueries([taskQueryKeys.getTask]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { isLoading, data } = useQuery([taskQueryKeys.getTask], searchTask);

  const executeSearchTask = (searchQuery: any) => {
    return searchTask(searchQuery);
  };

  return { executeSearchTask, isLoading, data };
};

export {
  useGetTasks,
  useCreateTasks,
  useDeleteTask,
  useGetTaskByProjectId,
  useEditTask,
  useSearchTask,
};
