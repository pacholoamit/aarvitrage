import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

const Navbar: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const ThemeToggle = (
    <ActionIcon
      variant="outline"
      color={isDark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {isDark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );

  return ThemeToggle;
};

export default Navbar;
