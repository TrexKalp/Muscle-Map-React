import React, { useEffect, useState } from "react";
import axios from "axios";

const RapidAPIExample: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
          {
            headers: {
              "X-RapidAPI-Key":
                "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5",
              "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>RapidAPI Example</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default RapidAPIExample;
