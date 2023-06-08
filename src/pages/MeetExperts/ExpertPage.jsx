import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { getIndividualProfile } from "../../api/dashboard";

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
  return <div>ExpertPage</div>;
}

export default ExpertPage;
