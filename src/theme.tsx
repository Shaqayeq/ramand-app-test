import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  direction: "rtl",
  colors: {
    brand: {
      // 100: "#f7fafc",
      // 900: "#1a202c",
    },
  },
  // initialColorMode: "light",
  // useSystemColorMode: true,
} as ThemeConfig);

export default theme;