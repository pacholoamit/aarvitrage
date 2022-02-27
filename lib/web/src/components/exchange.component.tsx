import React from "react";
import { Autocomplete, Button, Group } from "@mantine/core";
import { ApiContext } from "../providers";
import { ApiContextType } from "../common/types";

const Exchange: React.FC = () => {
  const { setAarvitragePair, requestAarvitragePair } = React.useContext(
    ApiContext
  ) as ApiContextType;

  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Select Trade pair"
        placeholder="BTC/USDT"
        data={["BTC/USDT"]}
        name="symbols"
        onChange={setAarvitragePair}
      />
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        onClick={requestAarvitragePair}
      >
        Find arbitrage
      </Button>
    </Group>
  );
};

export default Exchange;
