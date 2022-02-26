import {
  AppShell,
  Header,
  ActionIcon,
  useMantineColorScheme,
  Group,
  Title,
} from "@mantine/core";
import { SunIcon, MoonIcon, DashboardIcon } from "@modulz/radix-icons";
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

  const Logo = (
    <Group spacing={"xs"}>
      <DashboardIcon style={Styles.logoIcon} />
      <Title order={1} align="left">
        Aarvitrage
      </Title>
    </Group>
  );

  const HeaderComponents = (
    <Header height={64} padding="md">
      <Group position="apart">
        {Logo}
        {ThemeToggle}
      </Group>
    </Header>
  );

  return (
    <AppShell padding="sm" header={HeaderComponents} styles={Styles.appShell}>
      {children}
    </AppShell>
  );
};

export default NavShell;
