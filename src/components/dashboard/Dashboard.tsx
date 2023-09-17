import React from "react";
import { BigTaskCard, ProjectCard } from "../cards/Cards";

const Dashboard = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="">
      {/* if there's a project, use the newly added projects, if not use the Project title instead, do this for the tasks below */}
      <h3 className="text-[#000000] font-semibold">Newly Added Projects</h3>

      <div className="flex flex-wrap gap-3">
        {data.map((index) => {
          return <ProjectCard key={index} title="New Project" />;
        })}
      </div>
      <div className="my-10">
        <h3 className="text-[#000000] font-semibold">Newly Added Tasks</h3>

        <div className="flex flex-wrap gap-3">
          {data.map((index) => {
            return <BigTaskCard key={index} title="New Task" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
