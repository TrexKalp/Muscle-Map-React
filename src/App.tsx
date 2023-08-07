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
import NavBar from "./components/SidebarWithHeader";
import MuscleGrid from "./components/MuscleGrid";
import MuscleList from "./components/MuscleList";
import ImageMapComponent from "./components/ImageMapper";
import RapidAPIExample from "./components/RapidApi";

import MuscleTest from "./components/MuscleTest";
import ExerciseCardList from "./components/ExerciseCardList";
import MuscleDB from "./components/MuscleDB";
import SidebarWithHeader from "./components/SidebarWithHeader";
import { Box, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const templateLayout = useBreakpointValue({
    base: `"nav" "sidebar" "main"`,
    lg: `"nav nav" "sidebar main"`,
  });

  return (
    <Grid
      templateAreas={templateLayout}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <SidebarWithHeader />
      </GridItem>
    </Grid>
  );
}

export default App;
