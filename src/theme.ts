import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'

};

// theme.js
const theme = extendTheme({
    colors: {
        black: '#000',
        white: '#fff',
        gray: '#CBD5E0',
        cyan: "#76E4F7"
    }
  });

export default theme;