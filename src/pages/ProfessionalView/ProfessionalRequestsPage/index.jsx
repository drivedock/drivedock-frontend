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
} from "mdb-react-ui-kit";
import {
  acceptORRejectRequest,
  getInteractions,
} from "../../../api/professionalView";

function ProfessionalRequestsPage() {
  let mounted = false;
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [requestsData, setRequestsData] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [inputs, setInputs] = useState({
    confirmedDateTime: "",
    meetingLink: "",
  });

  async function getInteractionsData() {
    const response = await getInteractions("pending");
    if (response.success) {
      setRequestsData(response.results);
    }
  }

  useEffect(() => {
    if (!mounted) {
      mounted = true;
      getInteractionsData();
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);
    // api call
    const { confirmedDateTime, meetingLink } = inputs;
    try {
      const { connectId } = selectedRequest;
      const dataToSend = {
        connectId,
        status: "accepted",
        requestedDate: confirmedDateTime,
        meetingLink,
      };
      const res = await acceptORRejectRequest(dataToSend);
      if (res.success) {
        setShowSuccessMsg(true);
        getInteractionsData();
      }
    } catch (e) {}
  };

  const handleReject = async (requestSelected) => {
    try {
      const { connectId } = requestSelected;
      const dataToSend = {
        connectId,
        status: "rejected",
        requestedDate: "1999-01-01T00:00",
        meetingLink: "",
      };
      const res = await acceptORRejectRequest(dataToSend);
      if (res.success) {
        getInteractionsData();
      }
    } catch (e) {}
  };

  const renderModal = () => {
    return (
      <>
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <form onSubmit={handleSubmit}>
                <MDBModalHeader>
                  <MDBModalTitle>
                    Please provide the meeting details
                  </MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="mb-3">
                    <MDBInput
                      label="Meeting Link"
                      type="text"
                      name="meetingLink"
                      onChange={handleChange}
                      className="mb-4"
                      required
                    />
                    <div>
                      <label className="text-base">
                        Please select date and time
                      </label>
                      <input
                        label="Date"
                        type="datetime-local"
                        name="confirmedDateTime"
                        onChange={handleChange}
                        value={inputs?.confirmedDateTime}
                        min={new Date().toISOString().slice(0, 10)}
                        className="ml-3 mb-4 p-1"
                        required
                        style={{
                          borderWidth: 2,
                          borderColor: "black",
                          borderRadius: 8,
                        }}
                      />
                    </div>
                  </div>
                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn type="submit">Confirm</MDBBtn>
                </MDBModalFooter>
              </form>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };
  return (
    <div>
      {renderModal()}{" "}
      {showSuccessMsg && (
        <p className="mb-2 text-green-600">Request accepted successfully</p>
      )}
      {requestsData.length == 0 && <h5>No pending requests</h5>}
      {requestsData.map((request, index) => {
        const {
          StudentName: candidateName,
          topicName: requestedTopic,
          requestedDate: preferredDate,
          connectDesc: query,
        } = request;
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
                        setSelectedRequest(request);
                        setShowModal(true);
                      }}
                    >
                      Accept
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol size={2}>
                    <MDBBtn
                      onClick={() => {
                        handleReject(request);
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
