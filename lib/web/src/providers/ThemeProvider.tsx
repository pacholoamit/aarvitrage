import React from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  MantineThemeOverride,
} from "@mantine/core";

const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("dark");

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const theme: MantineThemeOverride = {
    colorScheme,
    headings: {
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
export default ThemeProvider;
