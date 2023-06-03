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

  const navigateToProProfile = (selectedProfessional) => {
    const { professionalEmail } = selectedProfessional;
    history.replace("/dashboard/meet-experts/" + professionalEmail);
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
                handleOnClick={navigateToProProfile}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
