import { AxiosError } from "axios";

export const getErrorMessage = (error: AxiosError | any) => {
  if (error && error.response) {
    return error.response.data.message;
  } else {
    return error.message;
  }
};
