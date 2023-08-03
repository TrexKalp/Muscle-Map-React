import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";

interface Exercise {
  id: number;
  name: string;
  muscle: string;
  image: string;
}

const ExerciseCardList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    axios
      .get("https://exercise-db.p.rapidapi.com/exercises", {
        headers: {
          "x-rapidapi-key":
            "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5", // replace with your actual key
          "x-rapidapi-host": "exercise-db.p.rapidapi.com",
        },
      })
      .then((response) => setExercises(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
      {exercises.map((exercise) => (
        <Box
          key={exercise.id}
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={4}
        >
          <Image src={exercise.image} alt={exercise.name} />
          <VStack p={4}>
            <Text fontWeight="bold" fontSize="xl">
              {exercise.name}
            </Text>
            <Text>{exercise.muscle}</Text>
          </VStack>
        </Box>
      ))}
    </Flex>
  );
};

export default ExerciseCardList;
