import { Form } from "antd";
import CustomButton from "components/button/CustomButton";
import { useEditProject } from "services/queries/project";
import { convertDate } from "utils/date";

interface IProps {
  editItem: any;
}

const EditProject = ({ editItem }: IProps) => {
  const { mutate, isLoading } = useEditProject();
  const handleSubmit = (values: any) => {
    console.log(values);
    const payload = {
      ...values,
      id: editItem?._id,
    };
    mutate(payload);
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <div className="mb-10 mt-9">
          <p className="mb-1">Project name</p>
          <Form.Item
            name={"project_name"}
            rules={[{ required: true, message: "Project name is required" }]}
            initialValue={editItem.projectName}
          >
            <input
              disabled={false}
              className="form-field__input"
              placeholder="Enter project name"
            />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">Start date</p>
          <Form.Item
            name={"start_date"}
            rules={[{ required: true, message: "Start date is required" }]}
            initialValue={editItem.startDate}
          >
            {/* <DatePicker
              onChange={onDateChange}
              className="form-field__input"
              format="YYYY-MM-DD"
              disabledDate={disabledDate}
            /> */}
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">End date</p>
          <Form.Item
            name={"end_date"}
            rules={[{ required: true, message: "End date is required" }]}
            initialValue={editItem.endDate}
          >
            <input disabled={false} className="form-field__input" type="date" />
          </Form.Item>
        </div>
        <div className="mb-12">
          <p className="mb-1">Project status</p>
          <Form.Item
            name={"status"}
            rules={[{ required: true, message: "Required" }]}
            initialValue="In Progress"
          >
            <input
              disabled={true}
              className="form-field__input"
              type="text"
              defaultValue={editItem.status}
            />
          </Form.Item>
        </div>

        <div className="mb-12">
          <p className="mb-1">Project description</p>
          <Form.Item
            name={"project_description"}
            rules={[
              { required: true, message: "Project description is required" },
            ]}
            initialValue={editItem.projectDescription}
          >
            <textarea className="h-[150px] rounded-[7px] border border-[#000000] w-[100%] p-2 outline-none resize-none"></textarea>
          </Form.Item>
        </div>

        <div className="grid place-items-center">
          <CustomButton
            styles={{
              width: "100%",
            }}
            text={"Edit Project"}
            loading={isLoading}
            // handleClick={handleNextStep}
          />
        </div>
      </Form>
    </div>
  );
};

export default EditProject;
