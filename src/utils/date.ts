import moment from "moment";

export const convertDate = (date: string) => {
  const data = moment(date).format("DD/MM/YYYY");
  return data;
};
