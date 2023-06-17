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
import { getAllWorkshops, registerForWorkshop } from "../../api/dashboard";

const WorkshopsListPage = () => {
  let mounted = false;
  const [workshops, setWorkshops] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState({});
  const [inputs, setInputs] = useState({
    numberOfStudents: "",
  });

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [errors, setErrors] = useState({
    numberOfStudents: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await getAllWorkshops();
      setWorkshops(res.workshops);
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
    setShowModal(false);
    // api call
    try {
      const { workshopId } = selectedWorkshop;
      const res = await registerForWorkshop({ ...inputs, id: workshopId });
      if (res.success) {
        setShowSuccessMsg(true);
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
                <MDBModalTitle>
                  Please provide your attendee details
                </MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="mb-3">
                  <MDBInput
                    label="Number of Students attending"
                    type="number"
                    name="numberOfStudents"
                    onChange={handleChange}
                  />
                  {errors["numberOfStudents"] && (
                    <div className="mt-0.5 text-red-400 text-sm">
                      {errors["numberOfStudents"]}
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
      <h4>List of Workshops</h4>
      {renderModal()}
      <div className="mt-4">
        {workshops.length === 0 && (
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
        {workshops.map((workshop, index) => {
          const {
            workshopName,
            worshopDesc,
            workshopLocation,
            workshopDuration,
            workshopisCertified,
            startDate,
          } = workshop;
          let dateObj = startDate ? new Date(startDate) : new Date();
          return (
            <MDBRow key={index} className="mb-3">
              <MDBCard>
                <MDBCardHeader>
                  <MDBCardTitle>{workshopName}</MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>{worshopDesc}</MDBCardText>
                  <MDBRow className="mb-3">
                    <MDBCol size={5}>
                      <MDBIcon fas icon="map-marker-alt" /> {workshopLocation}
                    </MDBCol>
                    <MDBCol size={2}>
                      <MDBIcon far icon="calendar-check" />{" "}
                      {dateObj.toLocaleString().slice(0, 10)}
                    </MDBCol>
                    <MDBCol size={2}>
                      Duration - {workshopDuration ? workshopDuration : "1 day"}
                    </MDBCol>
                    <MDBCol
                      size={3}
                      className="d-flex align-items-center justify-center"
                    >
                      {workshopisCertified === 1 && (
                        <MDBCardText>
                          <MDBIcon fas icon="bookmark" className="mr-1" />
                          Certificate provided
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn
                    onClick={() => {
                      setSelectedWorkshop(workshop);
                      setShowModal(true);
                    }}
                  >
                    Register
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

export default WorkshopsListPage;
