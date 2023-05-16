import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { updateProfileStatus } from "../../api/profile";

export default function Modal() {
  const [basicModal, setBasicModal] = useState(true);
  const [inputs, setInputs] = useState({
    collegeName: "",
    branch: "",
    semester: "",
    passoutYear: "",
  });

  const [errors, setErrors] = useState({
    collegeName: "",
    branch: "",
    semester: "",
    passoutYear: "",
    backendError: "",
  });

  const toggleShow = () => setBasicModal(!basicModal);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((values) => ({ ...values, [name]: "" }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const { collegeName, branch, semester, passoutYear } = inputs;
    let anyError = false;
    if (collegeName.length == 0) {
      setErrors((values) => ({
        ...values,
        collegeName: "Please enter a valid college name",
      }));
      anyError = true;
    }

    if (branch.length == 0) {
      setErrors((values) => ({
        ...values,
        branch: "Please enter a valid branch name",
      }));
      anyError = true;
    }

    if (semester.length == 0) {
      setErrors((values) => ({
        ...values,
        semester: "Please enter a valid semester",
      }));
      anyError = true;
    }

    if (passoutYear.length == 0) {
      setErrors((values) => ({
        ...values,
        passoutYear: "Please enter a valid passout year",
      }));
      anyError = true;
    }

    if (anyError) return;

    // make update api call
    const response = await updateProfileStatus(inputs);
    if (response.success) {
      toggleShow();
    } else {
      setErrors((values) => ({
        ...values,
        backendError: "Please try again after sometime",
      }));
    }
  };
  return (
    <>
      <MDBModal
        closeOnEsc={false}
        show={basicModal}
        staticBackdrop={true}
        setShow={setBasicModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Please provide your education details
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="mb-3">
                <MDBInput
                  label="Name of the college"
                  type="text"
                  name="collegeName"
                  onChange={handleChange}
                />
                {errors["collegeName"] && (
                  <div className="mt-0.5 text-red-400 text-sm">
                    {errors["collegeName"]}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <MDBInput
                  label="Branch"
                  type="text"
                  name="branch"
                  onChange={handleChange}
                />
                {errors["branch"] && (
                  <div className="mt-0.5 text-red-400 text-sm">
                    {errors["branch"]}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <MDBInput
                  label="Semester"
                  type="text"
                  name="semester"
                  onChange={handleChange}
                />
                {errors["semester"] && (
                  <div className="mt-0.5 text-red-400 text-sm">
                    {errors["semester"]}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <MDBInput
                  label="Passout year"
                  type="text"
                  name="passoutYear"
                  onChange={handleChange}
                />
                {errors["passoutYear"] && (
                  <div className="mt-0.5 text-red-400 text-sm">
                    {errors["passoutYear"]}
                  </div>
                )}
              </div>

              <div>
                {errors["backendError"] && (
                  <div className="mt-1 text-red-400 text-sm">
                    {errors["backendError"]}
                  </div>
                )}
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn onClick={handleSave}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
