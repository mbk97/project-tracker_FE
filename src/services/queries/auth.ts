import { useMutation } from "@tanstack/react-query";
import { useToast } from "hooks/toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/axiosConfig";
import { getErrorMessage } from "utils/response-helper";
import { saveToLocalStorage } from "utils/storage";

const useLoginRequest = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useToast();

  const loginUserRequest = async (payload: any) => {
    try {
      const response = await axiosInstance.post("/auth/login", payload);
      if (response.status === 200) {
        navigate("/dashboard/home");
      }
      toastSuccess(response.data.message);
      const userData = response.data.user;
      saveToLocalStorage("user_data", userData);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(loginUserRequest);
  return { mutate, isLoading };
};

const useRegisterRequest = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useToast();

  const registerUserRequest = async (payload: any) => {
    const body = {
      email: payload.email,
      password: payload.password,
      name: payload.name,
    };
    try {
      const response = await axiosInstance.post("/auth/register", body);
      if (response.status === 200) {
        navigate("/dashboard/home");
      }
      toastSuccess(response.data.message);
      const userData = response.data.user;
      saveToLocalStorage("user_data", userData);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toastError(errorMessage);
    }
  };

  const { mutate, isLoading } = useMutation(registerUserRequest);
  return { mutate, isLoading };
};

export { useLoginRequest, useRegisterRequest };
