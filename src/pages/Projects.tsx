import { useEffect, useState } from "react";
import AddProjects from "components/project/AddProjects";
import AddTask from "components/tasks/addTask/AddTask";
import CustomButton from "components/button/CustomButton";
import CustomModal from "components/customModal/CustomModal";
import LeftModal from "components/customModal/LeftModal";
import EditProject from "components/project/EditProject";
import ProgressBar from "components/progressBar/ProgressBar";
import ProjectDetails from "components/project/ProjectDetails";
import { PageTitle } from "components/text/Text";
import {
  closeAddProjectModal,
  closeAddTaskModal,
  closeDeleteProjectModal,
  closeEditProjectModal,
  closeProjectDetailsModal,
  toggleAddProjectModal,
  toggleDeleteProjectModal,
  toggleEditProjectModal,
  toggleProjectDetailsModal,
} from "redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/store";
import { bodyData, headerData } from "utils/data/tableData";
import DeleteProject from "components/project/DeleteProject";
import { useGetProjects, useSearchProject } from "services/queries/project";
import moment from "moment";
import { convertDate } from "utils/date";
import { IconButton, Skeleton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { axiosInstance } from "services/axiosConfig";
import { getErrorMessage } from "utils/response-helper";
import { useToast } from "hooks/toast";

const Projects = () => {
  const { result, isLoading } = useGetProjects();

  const { executeSearch, data, isLoading: searchLoading } = useSearchProject();
  const dispatch = useAppDispatch();
  const [projectDetail, setProjectDetail] = useState<any>("");
  const [query, setQuery] = useState<any>("");
  const [editItem, setEditItem] = useState<any>({});
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

  const handleOpenProjectDetails = (item: any) => {
    dispatch(toggleProjectDetailsModal());
    setProjectDetail(item);
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

  const handleOpenEditProjectModal = (item: any) => {
    dispatch(toggleEditProjectModal());
    dispatch(closeProjectDetailsModal());
    setEditItem(item);
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

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    executeSearch(query);
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <PageTitle text="Projects" />
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <input
              disabled={false}
              // value={query}
              name="query"
              onChange={handleChange}
              className="form-field__input"
              placeholder="Search by project name"
            />
            <IconButton onClick={() => handleSearch()}>
              <BiSearch />
            </IconButton>
          </div>
          <CustomButton
            text="Add project +"
            handleClick={() => {
              dispatch(toggleAddProjectModal());
            }}
          />
        </div>
      </div>
      <div className="mt-11">
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width={"auto"}
            height={200}
            animation="wave"
          />
        )}
      </div>
      {!isLoading && result?.length > 0 ? (
        <div>
          {/* md:w-[100%] */}
          <div className=" bg-[#ffffff] w-[400px] md:w-[100%] overflow-x-auto mt-11 rounded-[8px]">
            <table className="w-[100%]">
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
                {result?.map((item: any) => {
                  return (
                    <tr key={item.id} className="data-row">
                      <td className="whitespace-nowrap">{item.projectName}</td>
                      <td className="whitespace-nowrap">{item.status}</td>
                      <td className="whitespace-nowrap">
                        {convertDate(item.startDate)}
                      </td>
                      <td className="whitespace-nowrap">
                        {" "}
                        {convertDate(item.endDate)}
                      </td>
                      <td className="whitespace-nowrap">
                        {/* <ProgressBar progress={item.Progress} /> */}
                      </td>

                      <td>
                        <CustomButton
                          text={"View more"}
                          handleClick={() => {
                            handleOpenProjectDetails(item);
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
      ) : null}

      {!isLoading && result?.length === 0 && (
        <p>You do not have any ongoing project</p>
      )}
      <CustomModal
        open={projectDetailsModalState}
        handleClose={handleCloseProjectDetails}
        dialogTitle={projectDetail?.projectName}
      >
        <ProjectDetails
          handleDeleteProjectModal={handleDeleteProjectModal}
          handleOpenEditProjectModal={handleOpenEditProjectModal}
          projectDetail={projectDetail}
        />
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
        <EditProject editItem={editItem} />
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
