import React from "react";
import { useAppSelector } from "../redux/store";

const Homepage = () => {
  const data = useAppSelector((state) => state.project.value);
  console.log(data);
  return <div className=""> Homepage</div>;
};

export default Homepage;
