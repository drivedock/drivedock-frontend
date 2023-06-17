import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBSpinner,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import {
  getProfessionalProfiles,
  getTotalProfilesCount,
} from "../../api/dashboard";
import ProfessionalProfileCard from "./ProfessionalProfileCard";
import { DEPARTMENTS, DEPARTMENTS_NAME_TO_ID_MAPPING } from "../../constants";

export default function MeetExperts() {
  let mounted = false;
  let history = useHistory();
  const [totalPages, setTotalPages] = useState([0]);
  const [professionals, setProfessionals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  async function fetchData(offset) {
    const res = await getProfessionalProfiles(offset);
    setProfessionals(res.professionals);
  }

  async function fetchInitialData() {
    const totalCountResponse = await getTotalProfilesCount();
    const res = await getProfessionalProfiles(0);
    setProfessionals(res.professionals);
    if (totalCountResponse?.results && totalCountResponse?.results > 9) {
      const noOfPages = Math.floor(totalCountResponse?.results / 9);
      const arr = Array.from(Array(noOfPages).keys());
      setTotalPages(arr);
    }
    setShowLoader(false);
  }

  useEffect(() => {
    if (!mounted) {
      mounted = true;
      fetchInitialData();
    }
  }, []);

  const handleFilter = async (filteredValue) => {
    setSelectedFilterValue(filteredValue);
    const filteredDeptID = DEPARTMENTS_NAME_TO_ID_MAPPING[filteredValue];
    if (filteredDeptID) {
      setShowLoader(true);
      const totalCountResponse = await getTotalProfilesCount(filteredDeptID);
      const res = await getProfessionalProfiles(0, filteredDeptID);
      setProfessionals(res.professionals);
      if (totalCountResponse?.results && totalCountResponse?.results > 9) {
        const noOfPages = Math.floor(totalCountResponse?.results / 9);
        const arr = Array.from(Array(noOfPages).keys());
        setTotalPages(arr);
      }
      setShowLoader(false);
    }
  };

  const navigateToProProfile = (selectedProfessional, index) => {
    history.replace({
      pathname: "/dashboard/meet-experts/" + index,
      params: selectedProfessional,
    });
  };

  const handlePaginate = (pageNumber) => {
    if (pageNumber < 0 || pageNumber > totalPages.length - 1) {
      return;
    }
    if (pageNumber) setCurrentPage(pageNumber);
    fetchData(pageNumber);
  };

  if (showLoader) {
    return (
      <div className="d-flex justify-center">
        <MDBSpinner role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  }

  return (
    <div>
      <section className="pb-5">
        <MDBRow>
          <MDBCol>
            {" "}
            <h4>Meet Experts</h4>
          </MDBCol>
          <MDBCol size={4}>
            <div className="">
              <select
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                name="dept"
                id="cars"
                value={selectedFilterValue}
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Filter by dept
                </option>
                {DEPARTMENTS.map((dept) => {
                  return (
                    <>
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </MDBCol>
          <MDBCol size={2}>
            {selectedFilterValue && (
              <a
                onClick={() => {
                  setSelectedFilterValue("");
                  fetchInitialData();
                }}
              >
                clear filter
              </a>
            )}
          </MDBCol>
        </MDBRow>
        <div className="d-flex mt-4 flex-wrap">
          {!showLoader && professionals.length === 0 && (
            <h5>No data with the selected filter</h5>
          )}
          {professionals.map((pro, index) => {
            return (
              <ProfessionalProfileCard
                key={index}
                professional={pro}
                handleOnClick={(p) => navigateToProProfile(p, index)}
              />
            );
          })}
        </div>
        {totalPages.length > 1 && (
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-center"
          >
            <MDBPagination className="mb-0">
              <MDBPaginationItem
                className="mr-2"
                onClick={() => handlePaginate(currentPage - 1)}
                disabled={currentPage === 0}
              >
                <MDBPaginationLink>Previous</MDBPaginationLink>
              </MDBPaginationItem>
              {totalPages.map((pageNumber) => {
                return (
                  <MDBPaginationItem
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => handlePaginate(pageNumber)}
                  >
                    <MDBPaginationLink>{pageNumber + 1}</MDBPaginationLink>
                  </MDBPaginationItem>
                );
              })}
              <MDBPaginationItem
                className="ml-2"
                onClick={() => handlePaginate(currentPage + 1)}
                disabled={totalPages.length - 1 === currentPage}
              >
                <MDBPaginationLink>Next</MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </nav>
        )}
      </section>
    </div>
  );
}
