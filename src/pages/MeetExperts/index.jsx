import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import { getProfessionalProfiles } from "../../api/dashboard";
import ProfessionalProfileCard from "./ProfessionalProfileCard";

export default function MeetExperts() {
  let mounted = false;
  let history = useHistory();
  const totalPages = Array.from(Array(5).keys());
  const [professionals, setProfessionals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchData() {
    const res = await getProfessionalProfiles(currentPage);
    setProfessionals(res.professionals);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, []);

  const navigateToProProfile = (selectedProfessional, index) => {
    const { professionalEmail } = selectedProfessional;

    history.replace({
      pathname: "/dashboard/meet-experts/" + index,
      params: selectedProfessional,
    });
  };

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="pb-5">
        <h4>Meet Experts</h4>
        <div className="d-flex mt-4 flex-wrap">
          {professionals.map((pro, index) => {
            return (
              <ProfessionalProfileCard
                professional={pro}
                handleOnClick={(p) => navigateToProProfile(p, index)}
              />
            );
          })}
        </div>
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
      </section>
    </div>
  );
}
