import React from "react";
import { getIndividualProfile } from "../../api/dashboard";

function ExpertPage() {
  let mounted = false;
  const [professionalData, setProfessionalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getIndividualProfile();
      console.log(res);
      // setProfessionalData(res.professionals);
    }
    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, []);
  return <div>ExpertPage</div>;
}

export default ExpertPage;
