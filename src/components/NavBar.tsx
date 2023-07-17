import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/mm.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
