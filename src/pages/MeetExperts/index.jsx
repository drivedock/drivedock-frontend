import React, { useEffect, useState } from "react";

import { getProfessionalProfiles } from "../../api/dashboard";
import ProfessionalProfileCard from "./ProfessionalProfileCard";

export default function MeetExperts() {
  let mounted = false;
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
    console.log("Clicked on", selectedProfessional);
  };

  return (
    <div>
      <section>
        <h4>Meet Experts</h4>
        <div className="d-flex mt-4 flex-wrap">
          {professionals.map((pro) => {
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
