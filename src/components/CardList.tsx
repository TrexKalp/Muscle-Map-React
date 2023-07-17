import React, { useEffect, useState } from "react";
import { Box, Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import axios from "axios";

const CardList: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

        setNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SimpleGrid columns={3} spacing={4}>
      {names.map((name, index) => (
        <Box key={index} p={4} borderWidth={1} borderRadius="md">
          <Text>{name}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CardList;
