import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React from "react";

const ThemeProvider: React.FC = ({ children }) => {
  const theme: MantineThemeOverride = {
    colorScheme: "dark",
  };
  return (
    <MantineProvider theme={theme} withGlobalStyles>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
