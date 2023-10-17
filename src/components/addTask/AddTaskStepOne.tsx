import React, { useState } from "react";
import CustomButton from "components/button/CustomButton";
import { Form } from "antd";

interface IProps {
  handleNextStep: () => void;
}

const AddTaskStepOne = ({ handleNextStep }: IProps) => {
  const [error, setError] = useState(false);
  const handleSubmit = (values: any) => {
    console.log(values);
    if (!values) {
      setError(true);
    }
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <div className="mb-10 mt-9">
          <p className="mb-1">Project name</p>
          <Form.Item
            name={"project_name"}
            rules={[{ required: true, message: "Project name is required" }]}
          >
            <input
              disabled={false}
              className="form-field__input"
              placeholder="Enter project name"
            />
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
            <input disabled={true} className="form-field__input" type="text" />
          </Form.Item>
        </div>

        <div className="mb-12">
          <p className="mb-1">Task description</p>
          <Form.Item
            name={"project_description"}
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
              handleClick={handleNextStep}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default AddTaskStepOne;
