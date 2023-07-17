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
        Games
      </Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={3}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>

              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid">Buy now</Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default MuscleGrid;
