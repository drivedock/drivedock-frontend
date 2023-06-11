import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
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

  const [inputs, setInputs] = useState({
    selectedTopic: "",
    date: "",
    desc: "",
  });

  const [errors, setErrors] = useState({
    selectedTopic: "",
    date: "",
    desc: "",
  });

  const [showModal, setShowModal] = useState(false);

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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((values) => ({ ...values, [name]: "" }));
  };

  const handleSubmit = () => {
    // make a post call
    console.log(inputs);
  };

  const renderModal = () => {
    return (
      <>
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog className="modal-dialog-centered ">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  Please provide details for interaction
                </MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Choose a topic{" "}
                    </label>
                  </div>
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="selectedTopic"
                    id="topics"
                    onChange={handleChange}
                  >
                    {TOPICS.map((topic) => {
                      return (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Preferred Date{" "}
                    </label>
                  </div>
                  <input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="startDate"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Why you want to interact?{" "}
                    </label>
                  </div>
                  <textarea
                    type="text"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="desc"
                    placeholder="Please brief why you want to interact?"
                    onChange={handleChange}
                    required
                    rows={2}
                  ></textarea>
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
      {showModal && renderModal()}
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
            <h5 className="mb-3">Mechanical & Robotics</h5>
            <MDBBtn onClick={() => setShowModal(true)}>
              Request for interaction
            </MDBBtn>
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
