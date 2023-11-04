import AddProjects from "components/project/AddProjects";
import AddTask from "components/tasks/addTask/AddTask";
import CustomButton from "components/button/CustomButton";
import CustomModal from "components/customModal/CustomModal";
import LeftModal from "components/customModal/LeftModal";
import EditProject from "components/project/EditProject";
import ProgressBar from "components/progressBar/ProgressBar";
import ProjectDetails from "components/project/ProjectDetails";
import { PageTitle } from "components/text/Text";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import {
  closeAddProjectModal,
  closeAddTaskModal,
  closeDeleteProjectModal,
  closeEditProjectModal,
  closeProjectDetailsModal,
  toggleAddProjectModal,
  toggleDeleteProjectModal,
  toggleProjectDetailsModal,
} from "redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/store";
import { bodyData, headerData } from "utils/data/tableData";
import DeleteProject from "components/project/DeleteProject";

const Projects = () => {
  const dispatch = useAppDispatch();
  const [projectTitle, setProjectTitle] = useState<string>("");
  // const [projectId, setProjectId] = useState<string>("");
  const taskModalState = useAppSelector((state) => state.modals.addTaskModal);
  const addProjectModalState = useAppSelector(
    (state) => state.modals.addProjectModal,
  );

  const editProjectModalState = useAppSelector(
    (state) => state.modals.editProjectModal,
  );
  const deleteProjectModalState = useAppSelector(
    (state) => state.modals.deleteProjectModal,
  );
  const projectDetailsModalState = useAppSelector(
    (state) => state.modals.projectDetailsModal,
  );

  const handleOpenProjectDetails = (title: string) => {
    dispatch(toggleProjectDetailsModal());
    setProjectTitle(title);
  };
  const handleCloseProjectDetails = () => {
    dispatch(closeProjectDetailsModal());
  };

  const handleCloseAddProjectModal = () => {
    dispatch(closeAddProjectModal());
  };

  const handleCloseTaskModal = () => {
    dispatch(closeAddTaskModal());
  };

  const handleCloseEditProjectModal = () => {
    dispatch(closeEditProjectModal());
  };

  const handleDeleteProjectModal = () => {
    dispatch(toggleDeleteProjectModal());
    dispatch(closeProjectDetailsModal());
  };
  const handleCloseDeleteProjectModal = () => {
    dispatch(closeDeleteProjectModal());
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <PageTitle text="Projects" />
        <CustomButton
          text="Add project +"
          handleClick={() => {
            dispatch(toggleAddProjectModal());
          }}
        />
      </div>
      <div>
        {/* md:w-[100%] */}
        <div className=" bg-[#ffffff] w-[400px] md:w-[100%] overflow-x-auto mt-11 rounded-[8px]">
          <table className="w-[100%] h-[300px]">
            <thead>
              <tr>
                {headerData.map((item) => {
                  return (
                    <th
                      style={{
                        fontWeight: 600,
                        borderBottom: "1px solid #e6e6e6",
                        fontSize: "18px",
                        padding: "20px 7px",
                        whiteSpace: "nowrap",
                      }}
                      className=" text-left "
                      key={item.id}
                    >
                      {item?.text}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {bodyData.map((item) => {
                return (
                  <tr key={item.id} className="data-row">
                    <td className=" whitespace-nowrap">{item.name}</td>
                    <td className=" whitespace-nowrap">{item.status}</td>
                    <td className=" whitespace-nowrap">{item.startDate}</td>
                    <td className=" whitespace-nowrap">{item.endDate}</td>
                    <td className=" whitespace-nowrap">
                      <ProgressBar progress={item.Progress} />
                    </td>

                    <td>
                      <CustomButton
                        text={"View more"}
                        handleClick={() => {
                          handleOpenProjectDetails(item.name);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <CustomModal
        open={projectDetailsModalState}
        handleClose={handleCloseProjectDetails}
        dialogTitle={projectTitle}
      >
        <ProjectDetails handleDeleteProjectModal={handleDeleteProjectModal} />
      </CustomModal>
      <CustomModal
        open={addProjectModalState}
        handleClose={handleCloseAddProjectModal}
        dialogTitle={"Add new project"}
      >
        <AddProjects />
      </CustomModal>

      <CustomModal
        open={editProjectModalState}
        handleClose={handleCloseEditProjectModal}
        dialogTitle={"Edit project"}
      >
        <EditProject />
      </CustomModal>

      <CustomModal
        open={deleteProjectModalState}
        handleClose={handleCloseDeleteProjectModal}
        dialogTitle={"Delete project"}
      >
        <DeleteProject />
      </CustomModal>

      <LeftModal open={taskModalState} handleClose={handleCloseTaskModal}>
        <AddTask />
      </LeftModal>
    </div>
  );
};

export default Projects;
