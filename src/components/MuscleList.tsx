import { Flex, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";

const MuscleList = () => {
  return (
    <>
      <Flex pos="absolute">
        <Stack>
          <Heading
            fontSize="2xl"
            marginTop={0}
            marginBottom={1}
            color={"#25274D"}
          >
            MuscleMap
          </Heading>

          <List>
            <ListItem>Popular</ListItem>
            <ListItem>Bodyweight</ListItem>
            <ListItem>Barbell</ListItem>
            <ListItem>Dumbbells</ListItem>
            <ListItem>Cables</ListItem>
            <ListItem>Stretches</ListItem>
            <ListItem>Workouts</ListItem>
            <ListItem>Protein Hacks</ListItem>
          </List>
        </Stack>
      </Flex>
    </>
  );
};

export default MuscleList;
