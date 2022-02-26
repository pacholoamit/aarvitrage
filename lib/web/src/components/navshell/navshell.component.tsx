import {
  AppShell,
  Header,
  ActionIcon,
  useMantineColorScheme,
  Grid,
  Group,
} from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import Styles from "./navshell.styles";
import React from "react";

const NavShell: React.FC = ({ children }) => {
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
        <SunIcon style={Styles.icons} />
      ) : (
        <MoonIcon style={Styles.icons} />
      )}
    </ActionIcon>
  );

  const HeaderComponents = (
    <Header height={60} padding="xs">
      <Group position="apart">
        {ThemeToggle}
        {ThemeToggle}
      </Group>
    </Header>
  );

  return (
    <AppShell padding="md" header={HeaderComponents} styles={Styles.appShell}>
      {children}
    </AppShell>
  );
};

export default NavShell;
