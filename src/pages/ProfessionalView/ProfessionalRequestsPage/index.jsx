import React, { useState } from "react";

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
} from "mdb-react-ui-kit";

const requests = [
  {
    candidateName: "John Doe",
    preferredDate: "12/06/2023",
    requestedTopic: "Battery Management",
    query:
      "I would like to more on this topic and interested to get some guidance from you",
  },
  {
    candidateName: "Tom Cruise",
    preferredDate: "12/07/2023",
    requestedTopic: "Career Guidance",
    query: "I would like to get a One on One mentoring",
  },
];

function ProfessionalRequestsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [inputs, setInputs] = useState({
    confirmedDate: "",
    meetingLink: "",
  });

  const [errors, setErrors] = useState({
    confirmedDate: "",
    meetingLink: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    setShowModal(false);
    // api call
    console.log(inputs);
    // try {
    //   const { workshopId } = selectedWorkshop;
    //   const res = await registerForWorkshop({ ...inputs, id: workshopId });
    //   if (res.success) {
    //     setShowSuccessMsg(true);
    //   }
    // } catch (e) {}
  };

  const renderModal = () => {
    return (
      <>
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Please give the meeting details</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="mb-3">
                  <MDBInput
                    label="Meeting Link"
                    type="text"
                    name="meetingLink"
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <MDBInput
                    label="Date of interaction"
                    type="date"
                    name="confirmedDate"
                    onChange={handleChange}
                  />

                  {errors["confirmedDate"] && (
                    <div className="mt-0.5 text-red-400 text-sm">
                      {errors["confirmedDate"]}
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
                <MDBBtn onClick={handleSubmit}>Confirm</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };
  return (
    <div>
      {renderModal()}
      {requests.map((workshop, index) => {
        const { candidateName, requestedTopic, preferredDate, query } =
          workshop;
        let dateObj = preferredDate ? new Date(preferredDate) : new Date();
        return (
          <MDBRow key={index} className="mb-4">
            <MDBCard>
              <MDBCardHeader>
                <MDBCardTitle>{candidateName}</MDBCardTitle>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-3">
                  <MDBCol size={5}>
                    <MDBIcon fas icon="book-open" /> {requestedTopic}
                  </MDBCol>
                  <MDBCol size={2}>
                    <MDBIcon far icon="calendar-check" />{" "}
                    {dateObj.toLocaleString().slice(0, 10)}
                  </MDBCol>
                </MDBRow>
                <MDBCardText>{query}</MDBCardText>
                <MDBRow>
                  <MDBCol size={2}>
                    <MDBBtn
                      onClick={() => {
                        setSelectedRequest(workshop);
                        setShowModal(true);
                        console.log("inside on click");
                      }}
                    >
                      Accept
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol size={2}>
                    <MDBBtn
                      onClick={() => {
                        setSelectedRequest(workshop);
                        setShowModal(true);
                        console.log("inside on click");
                      }}
                      color="secondary"
                    >
                      Reject
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        );
      })}
    </div>
  );
}

export default ProfessionalRequestsPage;
