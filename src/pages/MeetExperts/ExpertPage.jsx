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
import {
  createInteractionRequest,
  getIndividualProfile,
} from "../../api/dashboard";

function ExpertPage() {
  let mounted = false;
  const location = useLocation();
  const professionalData = location.params;
  const {
    professionalEmail,
    professionalName,
    professionalDept,
    professionalLocation,
    signedURL,
  } = professionalData;
  const [professionalExtraData, setProfessionalExtraData] = useState({});
  const [topics, setTopics] = useState([]);

  const [inputs, setInputs] = useState({
    selectedTopic: "",
    requestedDate: "",
    desc: "",
  });

  const [errors, setErrors] = useState({
    selectedTopic: "",
    requestedDate: "",
    desc: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getIndividualProfile(professionalEmail);
      setProfessionalExtraData(res.professional[0]);
      if (res.professional[0].professionalTopics) {
        const { professionalTopics } = res.professional[0];
        setTopics(professionalTopics.split(","));
      }
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
    // make a post call
    const dataToSend = {
      ...inputs,
      professionalEmail,
    };
    const res = await createInteractionRequest(dataToSend);
    if (res.success) {
      setSuccessMsg(true);
    }
  };

  const renderModal = () => {
    return (
      <>
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog className="">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  Please provide details for interaction
                </MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                {successMsg ? (
                  <div>Request submitted successfully</div>
                ) : (
                  <>
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
                        {topics.map((topic) => {
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
                        name="requestedDate"
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
                  </>
                )}
              </MDBModalBody>
              <MDBModalFooter>
                {successMsg ? (
                  <MDBBtn
                    onClick={() => {
                      setSuccessMsg(false);
                      showModal(false);
                    }}
                  >
                    Close
                  </MDBBtn>
                ) : (
                  <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
                )}
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
            src={
              signedURL
                ? signedURL
                : "https://mdbootstrap.com/img/new/standard/nature/184.webp"
            }
            style={{ borderRadius: "50%", height: 200, width: 190 }}
          />
        </div>
        <div className="d-flex justify-center align-items-center">
          <div>
            <h3>{professionalName}</h3>
            <h5 className="mb-2">{professionalDept}</h5>
            <h6 className="mb-2">{professionalLocation}</h6>
            <MDBBtn onClick={() => setShowModal(true)}>
              Request for interaction
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="mt-3 p-10">
        <div>
          <h4>Quick Intro</h4>
          <div>{professionalExtraData.professionalDesc}</div>
        </div>
        <div className="mt-4">
          <h4>Education</h4>
          <div>{professionalExtraData.professionalEducation}</div>
        </div>
        {topics.length > 0 && (
          <div className="mt-4">
            <h4>List of Topics</h4>
            <div>
              <MDBListGroup style={{ minWidthL: "22rem" }} light>
                {topics.map((topic, index) => {
                  return (
                    <MDBListGroupItem key={index}>
                      <div className="grid grid-cols-2">
                        <div>{topic}</div>
                      </div>
                    </MDBListGroupItem>
                  );
                })}
              </MDBListGroup>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpertPage;
