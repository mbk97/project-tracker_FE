import { useState } from "react";
import CustomButton from "components/button/CustomButton";
import { Form } from "antd";
import { useGetProjects } from "services/queries/project";
import { useAppDispatch, useAppSelector } from "redux/store";
import { updateFormData } from "redux/slices/projectSlice";

interface IProps {
  handleNextStep: () => void;
  isEditTask?: boolean;
  taskDetail?: any;
}

const AddTaskStepOne = ({ handleNextStep, isEditTask, taskDetail }: IProps) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const { result: projectData, isLoading: projectLoading } = useGetProjects();
  const addTaskFromProjectPageCheck = useAppSelector(
    (state) => state.modals.addTaskFromProjectPage,
  );
  const projectDetails = useAppSelector(
    (state) => state.project.projectDetailsData,
  );

  console.log(projectDetails._id, "Hello");

  const handleSubmit = (values: any) => {
    const selectedProject = projectData.find(
      (project: any) => project._id === values.project_id,
    );

    const payloadHandler = () => {
      if (addTaskFromProjectPageCheck) {
        return {
          projectId: values.project_id,
          projectName: projectDetails.projectName,
          taskName: values.task_name,
          taskDescription: values.task_description,
          taskStartDate: values.start_date,
          taskEndDate: values.end_date,
          taskStatus: values.status,
        };
      } else {
        return {
          id: taskDetail?._id,
          projectId: values.project_id,
          projectName: isEditTask
            ? taskDetail.projectName
            : selectedProject?.projectName,
          taskName: values.task_name,
          taskDescription: values.task_description,
          taskStartDate: values.start_date,
          taskEndDate: values.end_date,
          taskStatus: values.status,
        };
      }
    };
    if (values) {
      handleNextStep();
      dispatch(updateFormData(payloadHandler()));
    }
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <div className="mb-10 mt-9">
          <p className="mb-1">Project name</p>

          {addTaskFromProjectPageCheck ? (
            <Form.Item
              name={"project_id"}
              rules={[{ required: true, message: "Project name is required" }]}
              initialValue={projectDetails._id}
            >
              <select
                disabled={false}
                className="form-field__input"
                placeholder="Enter project name"
              >
                <option
                  value={projectDetails._id}
                  key={projectDetails._id}
                  selected
                >
                  {projectDetails.projectName}
                </option>
              </select>
            </Form.Item>
          ) : (
            <Form.Item
              name={"project_id"}
              rules={[{ required: true, message: "Project name is required" }]}
              initialValue={isEditTask ? taskDetail.projectName : ""}
            >
              <select
                disabled={false}
                className="form-field__input"
                placeholder="Enter project name"
              >
                <option disabled selected value="">
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
          )}
        </div>
        <div className="mb-10 mt-9">
          <p className="mb-1">Task name</p>
          <Form.Item
            name={"task_name"}
            rules={[{ required: true, message: "Task name is required" }]}
            initialValue={isEditTask ? taskDetail.taskName : ""}
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
            initialValue={isEditTask ? taskDetail.taskStartDate : ""}
          >
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">End date</p>
          <Form.Item
            name={"end_date"}
            rules={[{ required: true, message: "End date is required" }]}
            initialValue={isEditTask ? taskDetail.taskEndDate : ""}
          >
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">Task status</p>
          {isEditTask ? (
            <Form.Item
              name={"status"}
              rules={[{ required: true, message: "Required" }]}
              initialValue={taskDetail.taskStatus}
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
          ) : (
            <Form.Item
              name={"status"}
              rules={[{ required: true, message: "Required" }]}
              initialValue={"In Progress"}
            >
              <select
                className="form-field__input"
                placeholder="Enter project name"
              >
                <option value={"In Progress"} selected>
                  In Progress
                </option>
              </select>
            </Form.Item>
          )}
        </div>

        <div className="mb-12">
          <p className="mb-1">Task description</p>
          <Form.Item
            name={"task_description"}
            rules={[
              { required: true, message: "Project description is required" },
            ]}
            initialValue={isEditTask ? taskDetail.taskDescription : ""}
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

export default AddTaskStepOne;
