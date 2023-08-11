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
  Select,
  Input,
  Badge,
  Skeleton,
} from "@chakra-ui/react";

interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

const MuscleDB: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");
  const [selectedEquip, setSelectedEquip] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get<Exercise[]>(
            "https://exercisedb.p.rapidapi.com/exercises",
            {
              headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
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

  const handleMuscleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMuscle(event.currentTarget.value);
  };

  const handleEquipChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEquip(event.currentTarget.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
    console.log("Search Term: ", event.currentTarget.value);
  };

  const filteredExercises = exercises.filter(
    (exercise) =>
      (selectedMuscle
        ? exercise.target && exercise.target.toLowerCase() === selectedMuscle
        : true) &&
      (selectedEquip
        ? exercise.equipment &&
          exercise.equipment.toLowerCase() === selectedEquip
        : true) &&
      (searchTerm
        ? exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  return (
    <>
      <Flex flexWrap="wrap">
        <div>
          <Card
            width={["300px", "300px", "400px"]}
            height={["500px", "550px", "600px"]}
            maxW="sm"
            margin={3}
          >
            <CardBody>
              <Stack maxW="sm" margin={3} spacing={3}>
                <Skeleton
                  height="300px"
                  borderRadius="lg"
                  startColor="#eee"
                  endColor="#ddd"
                />

                <Stack direction="row" spacing={3}>
                  <Skeleton
                    height="20px"
                    width="30%"
                    startColor="#eee"
                    endColor="#ddd"
                  />
                  <Skeleton
                    height="20px"
                    width="30%"
                    startColor="#eee"
                    endColor="#ddd"
                  />
                </Stack>

                <Skeleton height="30px" startColor="#eee" endColor="#ddd" />
                <Stack direction="row" spacing={3}>
                  <Skeleton
                    height="40px"
                    width="30%"
                    startColor="#eee"
                    endColor="#ddd"
                  />
                  <Skeleton
                    height="40px"
                    width="30%"
                    startColor="#eee"
                    endColor="#ddd"
                  />
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </Flex>
    </>
  );
};

export default MuscleDB;
