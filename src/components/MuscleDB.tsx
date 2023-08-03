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

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get<Exercise[]>(
            "https://exercisedb.p.rapidapi.com/exercises",
            {
              headers: {
                "X-RapidAPI-Key":
                  "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5",
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

  const filteredExercises = selectedMuscle
    ? exercises.filter(
        (exercise) => exercise.target.toLowerCase() === selectedMuscle
      )
    : exercises;

  return (
    <>
      <Select placeholder="Select muscle" onChange={handleMuscleChange}>
        <option value="abductors">Abductors</option>
        <option value="abs">Abs</option>
        <option value="adductors">Adductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="cardiovascular system">Cardiovascular System</option>
        <option value="delts">Delts</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="levator scapulae">Levator Scapulae</option>
        <option value="pectorals">Pectorals</option>
        <option value="quads">Quads</option>
        <option value="serratus anterior">Serratus Anterior</option>
        <option value="spine">Spine</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
        <option value="upper back">Upper Back</option>
      </Select>
      <Flex flexWrap="wrap">
        {filteredExercises.map((exercise, index) => (
          <div>
            <Card maxW="sm" margin={3}>
              <CardBody>
                <Image
                  src={exercise.gifUrl}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    <Text style={{ textTransform: "capitalize" }}></Text>
                  </Heading>
                  <Text style={{ textTransform: "capitalize" }}>
                    {exercise.target}
                  </Text>
                  <Text
                    style={{ textTransform: "capitalize" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    {exercise.name}
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
    </>
  );
};

export default MuscleDB;
