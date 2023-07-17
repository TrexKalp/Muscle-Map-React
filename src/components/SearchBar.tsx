import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
  return (
    <Stack spacing={3}>
      <Input
        placeholder="medium size"
        size="md"
        variant="filled"
        width="auto"
      />
    </Stack>
  );
};

export default SearchBar;
