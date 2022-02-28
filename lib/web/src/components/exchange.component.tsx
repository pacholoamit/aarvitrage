import React from "react";
import { Autocomplete, Button, Group } from "@mantine/core";
import { ApiContext } from "../providers";
import { ApiContextType } from "../common/types";

const Exchange: React.FC = () => {
  const { setArbitragePair, requestArbitragePair } = React.useContext(
    ApiContext
  ) as ApiContextType;

  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Select Trade pair"
        placeholder="BTC/USDT"
        data={["BTC/USDT"]}
        name="symbols"
        onChange={setArbitragePair}
      />
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        onClick={requestArbitragePair}
      >
        Find arbitrage
      </Button>
    </Group>
  );
};

export default Exchange;
