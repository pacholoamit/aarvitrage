import React from "react";
import { Autocomplete, Group } from "@mantine/core";

const Exchange: React.FC = () => {
  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Find Arbitrage"
        placeholder="BTC/USDT"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
    </Group>
  );
};

export default Exchange;
