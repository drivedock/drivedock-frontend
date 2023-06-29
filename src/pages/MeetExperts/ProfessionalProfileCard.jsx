import React from "react";
import { MDBCol } from "mdb-react-ui-kit";

function ProfessionalProfileCard({ professional, handleOnClick }) {
  const { professionalName, professionalDept, professionalEmail, signedURL } =
    professional;
  return (
    <MDBCol
      size={3}
      md={6}
      lg={3}
      key={professionalEmail}
      className="mr-5 mb-3 d-flex justify-content-center"
    >
      <div
        className="cursor-pointer"
        onClick={() => handleOnClick(professional)}
      >
        <img
          src={
            signedURL
              ? signedURL
              : "https://mdbootstrap.com/img/new/standard/nature/184.webp"
          }
          alt="..."
          style={{ height: 200, width: 200, borderRadius: 8 }}
        />
        <div style={{ padding: 15 }}>
          <h6 style={{ textTransform: "capitalize", color: "#0067dd" }}>
            {professionalName}
          </h6>
          <p style={{ fontSize: 14 }}>{professionalDept}</p>
        </div>
      </div>
    </MDBCol>
  );
}

export default ProfessionalProfileCard;
