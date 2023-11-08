import { getFromLocalStorage } from "../utils/storage";

const useUserData = () => {
  const data = getFromLocalStorage("user_data");
  return data;
};

export default useUserData;
