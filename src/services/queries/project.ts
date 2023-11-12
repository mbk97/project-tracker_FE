import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "hooks/toast";
import {
  closeAddProjectModal,
  closeEditProjectModal,
  closeProjectDetailsModal,
} from "redux/slices/modalSlice";
import { useAppDispatch } from "redux/store";
import { axiosInstance } from "services/axiosConfig";
import { projectQueryKeys } from "services/queryKeys";
import { getErrorMessage } from "utils/response-helper";

const useGetProjects = () => {
  const { toastError } = useToast();
  const fetchProjects = async () => {
    try {
      const response = await axiosInstance.get("/projects");
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { data, isLoading } = useQuery(
    [projectQueryKeys.getProject],
    fetchProjects,
  );
  const result = data?.data;
  console.log(data);
  return { result, isLoading };
};

const useCreateProjects = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const createProject = async (payload: any) => {
    const body = {
      projectName: payload.project_name,
      projectDescription: payload.project_description,
      status: payload.status,
      startDate: payload.start_date,
      endDate: payload.end_date,
    };
    try {
      const response = await axiosInstance.post("/projects", body);
      if (response.status === 201) {
        toastSuccess(response.data.message);
        dispatch(closeAddProjectModal());
        queryClient.invalidateQueries([projectQueryKeys.getProject]);
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

const useDeleteProject = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const deleteProject = async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/projects/${id}`);
      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeProjectDetailsModal());
        queryClient.invalidateQueries([projectQueryKeys.getProject]);
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

const useEditProject = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const editProject = async (payload: any) => {
    const body = {
      projectName: payload.project_name,
      projectDescription: payload.project_description,
      status: payload.status,
      startDate: payload.start_date,
      endDate: payload.end_date,
    };
    try {
      const response = await axiosInstance.put(`/projects/${payload.id}`, body);
      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeEditProjectModal());
        queryClient.invalidateQueries([projectQueryKeys.getProject]);
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

const useSearchProject = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const searchProject = async (payload: any) => {
    try {
      const response = await axiosInstance.get(
        `/projects/searchProject?projectName=${payload}`,
      );

      if (response.status === 200) {
        toastSuccess(response.data.message);
        dispatch(closeAddProjectModal());
        queryClient.invalidateQueries([projectQueryKeys.getProject]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { isLoading, data } = useQuery(
    [projectQueryKeys.getProject],
    searchProject,
  );

  const executeSearch = (searchQuery: any) => {
    return searchProject(searchQuery);
  };

  return { executeSearch, isLoading, data };
};

const useGetTaskByProjectId = () => {
  const { toastError, toastSuccess } = useToast();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const getTaskByProjectId = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/tasks/${id}`);
      if (response.status === 200) {
        // toastSuccess(response.data.message);
        // dispatch(closeProjectDetailsModal());
        queryClient.invalidateQueries([projectQueryKeys.getProject]);
      }
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(getTaskByProjectId);
  return { mutate, isLoading };
};
export {
  useGetProjects,
  useCreateProjects,
  useDeleteProject,
  useEditProject,
  useSearchProject,
  useGetTaskByProjectId,
};
