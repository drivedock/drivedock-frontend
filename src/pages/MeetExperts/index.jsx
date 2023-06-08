import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { getProfessionalProfiles } from "../../api/dashboard";
import ProfessionalProfileCard from "./ProfessionalProfileCard";

export default function MeetExperts() {
  let mounted = false;
  let history = useHistory();
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProfessionalProfiles();
      setProfessionals(res.professionals);
    }
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

  return (
    <div>
      <section>
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
      </section>
    </div>
  );
}
