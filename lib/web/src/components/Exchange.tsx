import React from "react";
import axios from "axios";
import { Autocomplete, Button, Group } from "@mantine/core";

const Exchange: React.FC = () => {
  const runQuery = async () => {
    const result = await axios.get(
      "https://aarvitrage-api.arch-server.com/app"
    );
    console.log(result);
  };
  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Find Arbitrage"
        placeholder="BTC/USDT"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
      <Button onClick={runQuery}> Test query</Button>
    </Group>
  );
};

export default Exchange;
