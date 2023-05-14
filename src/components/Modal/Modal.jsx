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

export default function Modal() {
  const [basicModal, setBasicModal] = useState(true);
  const [inputs, setInputs] = useState({
    collegeName: "",
    branch: "",
    semester: "",
    passoutYear: "",
  });

  const toggleShow = () => setBasicModal(!basicModal);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSave = () => {
    console.log(inputs);
  };
  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Please provide your education details
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                className="mb-3"
                label="Name of the college"
                type="text"
                name="collegeName"
                onChange={handleChange}
              />
              <MDBInput
                className="mb-3"
                label="Branch"
                type="text"
                name="branch"
                onChange={handleChange}
              />
              <MDBInput
                className="mb-3"
                label="Semester"
                type="text"
                name="semester"
                onChange={handleChange}
              />
              <MDBInput
                className="mb-3"
                label="Passout year"
                type="text"
                name="passoutYear"
                onChange={handleChange}
              />
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
