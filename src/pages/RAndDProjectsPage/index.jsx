import React, { useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { getAllResearchProjects, applyForProject } from "../../api/dashboard";
import { PROJECT_APPLICANT_TYPES } from "../../constants";
import { getProfileDetails } from "../../api/profile";

const RAndDProjectsPage = () => {
  let mounted = false;
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [isResumeUploaded, setIsResumeUploaded] = useState(false);
  const [inputs, setInputs] = useState({
    applyingAs: "",
  });

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [errors, setErrors] = useState({
    applyingAs: "",
  });

  const fetchProjects = async () => {
    const res = await getAllResearchProjects();
    setProjects(res.researchprojects || []);
  };

  useEffect(() => {
    async function fetchData() {
      const resumeUploadedStatus = await getProfileDetails();
      console.log(resumeUploadedStatus);
      if (
        resumeUploadedStatus.success &&
        resumeUploadedStatus.profile?.isResumeAvailable === 1
      ) {
        setIsResumeUploaded(true);
      }
      const res = await getAllResearchProjects();
      setProjects(res.researchprojects || []);
    }

    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((values) => ({ ...values, [name]: "" }));
  };

  const handleSubmit = async () => {
    if (!isResumeUploaded) {
      setErrors({
        backendError: "Please upload your resume in profile settings",
      });
      return;
    }

    if (inputs.applyingAs.length === 0) {
      setErrors({
        backendError: "Please select an option",
      });
      return;
    }
    setShowModal(false);
    try {
      const { researchId } = selectedProject;
      const res = await applyForProject({ ...inputs, id: researchId });
      if (res.success) {
        setShowSuccessMsg(true);
        fetchProjects();
      }
    } catch (e) {}
  };

  const renderModal = () => {
    return (
      <>
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Please provide your details</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <select
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="applyingAs"
                  id="applyingAs"
                  onChange={handleChange}
                >
                  {PROJECT_APPLICANT_TYPES.map((type) => {
                    return (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </select>
                <div>
                  {errors["backendError"] && (
                    <div className="mt-1 text-red-400 text-sm">
                      {errors["backendError"]}
                    </div>
                  )}
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };

  return (
    <div>
      <h4>List of R&D Projects</h4>
      {renderModal()}
      <div className="mt-4">
        {projects.length === 0 && (
          <div className="d-flex justify-center">
            <MDBSpinner role="status">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          </div>
        )}
        {showSuccessMsg && (
          <div className="mb-2 text-green-600">
            Your request submitted successfully
          </div>
        )}
        {projects.map((research, index) => {
          const {
            researchName,
            researchDesc,
            researchLocation,
            researchDuration,
            linkedInLink,
            researchType,
          } = research;

          return (
            <MDBRow key={index} className="mb-3">
              <MDBCard>
                <MDBCardHeader>
                  <MDBCardTitle>{researchName}</MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>{researchDesc}</MDBCardText>
                  <MDBRow className="mb-3">
                    <MDBCol size={5}>
                      <MDBIcon fas icon="map-marker-alt" /> {researchLocation}
                    </MDBCol>
                    <MDBCol size={2}>
                      Duration - {researchDuration ? researchDuration : "1 day"}
                    </MDBCol>
                    {linkedInLink && (
                      <MDBCol
                        size={3}
                        className="d-flex align-items-center justify-center"
                      >
                        <a href={linkedInLink}>know more</a>
                      </MDBCol>
                    )}
                  </MDBRow>
                  <MDBBtn
                    onClick={() => {
                      setSelectedProject(research);
                      setShowModal(true);
                    }}
                  >
                    Apply
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          );
        })}
      </div>
    </div>
  );
};

export default RAndDProjectsPage;
