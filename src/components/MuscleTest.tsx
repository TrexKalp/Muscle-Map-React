import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  SimpleGrid,
  Text,
  Image,
  Stack,
  CardBody,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  HStack,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react";

interface Exercise {
  id: number;
  exercise_name: string;
  Category: string;
  Difficulty: string;
  Force: string;
  Grips: string;
  details: string;
  steps: string[];
  target: {
    Primary: string;
    Secondary: string;
  };
  videoURL: string[];
  youtubeURL: string;
}

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get<Exercise[]>(
            "https://musclewiki.p.rapidapi.com/exercises",
            {
              headers: {
                "X-RapidAPI-Key":
                  "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5",
                "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
              },
            }
          );
          const exerciseData = response.data;
          setExercises(exerciseData);
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <Flex flexWrap="wrap">
      {exercises.map((exercise, index) => (
        <div>
          <Card maxW="sm" margin={3}>
            <CardBody>
              <Image
                src={exercise.videoURL[0]}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  <Text style={{ textTransform: "capitalize" }}></Text>
                </Heading>
                <Text style={{ textTransform: "capitalize" }}>
                  {exercise.target.Primary}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {exercise.exercise_name}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="red">
                  More Info
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Similar
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))}
    </Flex>
  );
};

export default ExerciseList;
