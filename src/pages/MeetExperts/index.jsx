import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBSpinner,
} from "mdb-react-ui-kit";

import {
  getProfessionalProfiles,
  getTotalProfilesCount,
} from "../../api/dashboard";
import ProfessionalProfileCard from "./ProfessionalProfileCard";

export default function MeetExperts() {
  let mounted = false;
  let history = useHistory();
  const [totalPages, setTotalPages] = useState([0]);
  const [professionals, setProfessionals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  async function fetchData(offset) {
    const res = await getProfessionalProfiles(offset);
    setProfessionals(res.professionals);
  }

  useEffect(() => {
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
    if (!mounted) {
      mounted = true;
      fetchInitialData();
    }
  }, []);

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
        <h4>Meet Experts</h4>
        <div className="d-flex mt-4 flex-wrap">
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
