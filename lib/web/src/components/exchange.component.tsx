import React from "react";
import axios from "axios";
import { Autocomplete, Button, Group } from "@mantine/core";
import { useQuery } from "../hooks";

const Exchange: React.FC = () => {
  const runQuery = () => {
    const { response } = useQuery(
      axios.get("https://aarvitrage-api.arch-server.com/app")
    );

    console.log(response);
  };

  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Select Trade pair"
        placeholder="BTC/USDT"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
      <Button onClick={runQuery}> Find arbitrage</Button>
    </Group>
  );
};

export default Exchange;
