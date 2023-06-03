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
} from "mdb-react-ui-kit";
import { getAllWorkshops } from "../../api/dashboard";

const WorkshopsListPage = () => {
  let mounted = false;
  const [workshops, setWorkshops] = useState([]);
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
  return (
    <div>
      <h4>List of Workshops</h4>
      <div className="mt-4">
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
                  <MDBBtn href="#">Register</MDBBtn>
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
