import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { MDBListGroup, MDBListGroupItem, MDBBtn } from "mdb-react-ui-kit";
// import { getIndividualProfile } from "../../api/dashboard";

const TOPICS = [
  "Battery Management",
  "Supply Chain Management",
  "Start up Formation",
];

function ExpertPage() {
  let mounted = false;
  const location = useLocation();
  const [professionalData, setProfessionalData] = useState(
    location.params || []
  );

  useEffect(() => {
    async function fetchData() {
      // const res = await getIndividualProfile();
      // console.log(res);
      // setProfessionalData(res.professionals);
    }
    if (!mounted) {
      mounted = true;
      console.log(professionalData);
      fetchData();
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            style={{ borderRadius: "50%", height: 200, width: 210 }}
          />
        </div>
        <div className="d-flex justify-center align-items-center">
          <div>
            <h3>John Doe</h3>
            <h5>Mechanical & Robotics</h5>
            <h5>Hyderabad, India</h5>
          </div>
        </div>
      </div>
      <div className="mt-3 p-10">
        <div>
          <h4>Quick Intro</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo conseq
          </div>
        </div>
        <div className="mt-4">
          <h4>Education</h4>
          <div>Masters in Mechanical Engineering</div>
        </div>
        <div className="mt-4">
          <h4>List of Topics</h4>
          <div>
            <MDBListGroup style={{ minWidthL: "22rem" }} light>
              {TOPICS.map((topic) => {
                return (
                  <MDBListGroupItem>
                    <div className="grid grid-cols-2">
                      <div>{topic}</div>
                      <div>
                        <MDBBtn>Request for interaction</MDBBtn>
                      </div>
                    </div>
                  </MDBListGroupItem>
                );
              })}
            </MDBListGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertPage;
