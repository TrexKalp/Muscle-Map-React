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
      <Input placeholder="Search by name" onChange={handleSearchChange} />
      <Select placeholder="All muscles" onChange={handleMuscleChange}>
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
      <Select placeholder="All equipment" onChange={handleEquipChange}>
        <option value="assisted">Assisted</option>
        <option value="band">Band</option>
        <option value="barbell">Barbell</option>
        <option value="body weight">Body Weight</option>
        <option value="bosu ball">Bosu Ball</option>
        <option value="cable">Cable</option>
        <option value="dumbbell">Dumbbell</option>
        <option value="elliptical machine">Elliptical Machine</option>
        <option value="ez barbell">EZ Barbell</option>
        <option value="hammer">Hammer</option>
        <option value="kettlebell">Kettlebell</option>
        <option value="leverage machine">Leverage Machine</option>
        <option value="medicine ball">Medicine Ball</option>
        <option value="olympic barbell">Olympic Barbell</option>
        <option value="resistance band">Resistance Band</option>
        <option value="roller">Roller</option>
        <option value="rope">Rope</option>
        <option value="skierg machine">Skierg Machine</option>
        <option value="sled machine">Sled Machine</option>
        <option value="smith machine">Smith Machine</option>
        <option value="stability ball">Stability Ball</option>
        <option value="stationary bike">Stationary Bike</option>
        <option value="stepmill machine">Stepmill Machine</option>
        <option value="tire">Tire</option>
        <option value="trap bar">Trap Bar</option>
        <option value="upper body ergometer">Upper Body Ergometer</option>
        <option value="weighted">Weighted</option>
        <option value="wheel roller">Wheel Roller</option>
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
