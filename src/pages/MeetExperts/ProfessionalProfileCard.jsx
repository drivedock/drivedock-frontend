import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";

function ProfessionalProfileCard({ professional, handleOnClick }) {
  const {
    professionalName,
    professionalDesc,
    professionalDept,
    professionalEmail,
  } = professional;
  return (
    <MDBCol
      size={3}
      md={6}
      lg={3}
      key={professionalEmail}
      className="mr-10"
      onClick={() => handleOnClick(professional)}
    >
      <MDBCard>
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>{professionalName}</MDBCardTitle>
          <MDBCardText>{professionalDept}</MDBCardText>
          <MDBCardText>{professionalDesc}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProfessionalProfileCard;
