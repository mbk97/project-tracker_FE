import {
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
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
import { MdDelete } from "react-icons/md";
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
  const [projectId, setProjectId] = useState<string>("");
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
        <TableContainer
          component={Paper}
          className="w-[900px] overflow-x-scroll mt-11"
        >
          <Table>
            <TableHead>
              <TableRow>
                {headerData.map((item) => {
                  return (
                    <>
                      <TableCell
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                        key={item.id}
                      >
                        {item?.text}
                      </TableCell>
                    </>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {bodyData.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.startDate}</TableCell>
                    <TableCell>{item.endDate}</TableCell>
                    <TableCell>
                      <ProgressBar progress={item.Progress} />
                    </TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <>
                        <AiFillEye
                          size={25}
                          onClick={() => {
                            handleOpenProjectDetails(item.name);
                          }}
                        />
                      </>
                      <>
                        <MdDelete
                          size={25}
                          onClick={() => {
                            handleDeleteProjectModal();
                          }}
                        />
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CustomModal
        open={projectDetailsModalState}
        handleClose={handleCloseProjectDetails}
        dialogTitle={projectTitle}
      >
        <ProjectDetails />
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
