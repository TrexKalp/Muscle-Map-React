import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Text>Dark Mode</Text>
      <Switch
        size="md"
        colorScheme="blue"
        sx={{
          "input[type=checkbox]:not(:checked) ~ span": {
            backgroundColor: "gray",
          },
        }}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
