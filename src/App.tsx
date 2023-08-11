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

import SidebarWithHeader from "./components/SidebarWithHeader";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
