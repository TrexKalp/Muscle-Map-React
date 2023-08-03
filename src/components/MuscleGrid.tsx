import React, { useEffect, useState } from "react";
import incline from "../assets/incline.gif";
import apiClient from "../services/api-client";
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
} from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchMuscle {
  count: number;
  results: Game[];
}

const MuscleGrid = () => {
  const [muscle, setMuscle] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchMuscle>("/games")
      .then((res) => setMuscle(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      <Heading paddingLeft={10} as="h1" marginY={5} fontSize="5xl">
        Exercises
      </Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={3}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                <Text style={{ textTransform: "capitalize" }}></Text>
              </Heading>
              <Text></Text>
              <Text color="blue.600" fontSize="2xl"></Text>
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
      </SimpleGrid>
    </div>
  );
};

export default MuscleGrid;
