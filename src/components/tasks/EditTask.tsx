import { Form } from "antd";
import CustomButton from "components/button/CustomButton";
import React, { useState } from "react";
import { updateFormData } from "redux/slices/projectSlice";
import { useAppDispatch } from "redux/store";
import { useGetProjects } from "services/queries/project";

interface IProps {
  handleNextStep: () => void;
}

const EditTask = ({ handleNextStep }: IProps) => {
  const [error, setError] = useState(false);
  const { result: projectData, isLoading: projectLoading } = useGetProjects();

  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    const selectedProject = projectData.find(
      (project: any) => project._id === values.project_id,
    );
    const payload = {
      projectId: values.project_id,
      projectName: selectedProject?.projectName,
      taskName: values.task_name,
      taskDescription: values.task_description,
      taskStartDate: values.start_date,
      taskEndDate: values.end_date,
      taskStatus: values.status,
    };

    if (values) {
      handleNextStep();
      dispatch(updateFormData(payload));
    }
    // mutate(values);
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <div className="mb-10 mt-9">
          <p className="mb-1">Project name</p>

          <Form.Item
            name={"project_id"}
            rules={[{ required: true, message: "Project name is required" }]}
          >
            <select
              disabled={false}
              className="form-field__input"
              placeholder="Enter project name"
            >
              <option disabled selected>
                Select project
              </option>
              {projectData?.map((project: any) => {
                return (
                  <option value={project._id} key={project._id}>
                    {project.projectName}
                  </option>
                );
              })}
            </select>
          </Form.Item>
        </div>
        <div className="mb-10 mt-9">
          <p className="mb-1">Task name</p>
          <Form.Item
            name={"task_name"}
            rules={[{ required: true, message: "Task name is required" }]}
          >
            <input
              disabled={false}
              className="form-field__input"
              placeholder="Enter task name"
            />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">Start date</p>
          <Form.Item
            name={"start_date"}
            rules={[{ required: true, message: "Start date is required" }]}
          >
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">End date</p>
          <Form.Item
            name={"end_date"}
            rules={[{ required: true, message: "End date is required" }]}
          >
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">Task status</p>
          <Form.Item
            name={"status"}
            rules={[{ required: true, message: "Required" }]}
            initialValue="In Progress"
          >
            <select
              className="form-field__input"
              placeholder="Enter project name"
            >
              <option value={"In Progress"} selected>
                In Progress
              </option>
              <option value={"Completed"}>Completed</option>
            </select>
          </Form.Item>
        </div>

        <div className="mb-12">
          <p className="mb-1">Task description</p>
          <Form.Item
            name={"task_description"}
            rules={[
              { required: true, message: "Project description is required" },
            ]}
          >
            <textarea className="h-[150px] rounded-[7px] border border-[#000000] w-[100%] p-2 outline-none resize-none"></textarea>
          </Form.Item>
        </div>

        <div className="grid place-items-center">
          {error ? null : (
            <CustomButton
              styles={{
                width: "100%",
              }}
              text={"Proceed"}
              // handleClick={handleNextStep}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default EditTask;
