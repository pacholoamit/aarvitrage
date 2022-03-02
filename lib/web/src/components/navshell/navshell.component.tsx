import {
  AppShell,
  Header,
  ActionIcon,
  useMantineColorScheme,
  Group,
  Title,
  Text,
  Grid,
} from "@mantine/core";
import { SunIcon, MoonIcon, DashboardIcon } from "@modulz/radix-icons";
import Styles from "./navshell.styles";
import React from "react";

const NavShell: React.FC = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const Logo = (
    <Group spacing={"xs"} position="right">
      <DashboardIcon style={Styles.logoIcon} />
      <Title order={2} align="left">
        Aarvitrage
      </Title>
    </Group>
  );

  const Menu = (
    <Group spacing={"xl"} position="center">
      <Text weight={500}>Arbitrage</Text>
      <Text weight={500}>Markets</Text>
      <Text weight={500}>Exchange</Text>
      <Text weight={500}>De-Fi</Text>
    </Group>
  );

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

  // TODO: Make Header component responsive

  const HeaderComponents = (
    <Header height={64} padding="md">
      <Grid justify={"space-between"} align={"center"}>
        <Grid.Col lg={3} md={3}>
          {Logo}
        </Grid.Col>
        <Grid.Col lg={3} md={3}>
          {Menu}
        </Grid.Col>
        <Grid.Col lg={3} md={3}>
          {ThemeToggle}
        </Grid.Col>
      </Grid>
    </Header>
  );

  return (
    <AppShell padding="sm" header={HeaderComponents} styles={Styles.appShell}>
      {children}
    </AppShell>
  );
};

export default NavShell;
