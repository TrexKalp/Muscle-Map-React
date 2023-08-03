import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
  Show,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MuscleGrid from "./components/MuscleGrid";
import MuscleList from "./components/MuscleList";
import ImageMapComponent from "./components/ImageMapper";
import RapidAPIExample from "./components/RapidApi";

import MuscleTest from "./components/MuscleTest";
import ExerciseCardList from "./components/ExerciseCardList";
import MuscleDB from "./components/MuscleDB";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      /*templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      */
    >
      <GridItem area="nav" bg="blue" paddingX={5} paddingY={5} boxShadow={10}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="blue" area="aside" paddingX={5} width={200}>
          <MuscleList />
        </GridItem>
      </Show>
      <GridItem bg="" area="main">
        <Heading as="h1" marginTop={5} fontSize="5xl">
          MuscleMap
        </Heading>
        <ImageMapComponent />
        <Heading as="h1" marginY={5} fontSize="5xl">
          Exercises
        </Heading>

        <MuscleDB />
      </GridItem>
    </Grid>
  );
}

export default App;
