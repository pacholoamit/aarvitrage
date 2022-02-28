import React from "react";
import { Autocomplete, Button, Table, Group } from "@mantine/core";
import { ApiContext } from "../providers";
import { ApiContextType } from "../common/types";

const Exchange: React.FC = () => {
  const [loading, setIsLoading] = React.useState(false);
  const { setArbitragePair, requestArbitragePair, arbitragePairResult } =
    React.useContext(ApiContext) as ApiContextType;

  const handleFindArbitrageClick = async () => {
    setIsLoading(true);
    await requestArbitragePair();
    setIsLoading(false);
  };

  const rows = arbitragePairResult?.map((result) => (
    <tr key={result.exchangeId}>
      <td>{result.exchangeId}</td>
      <td>{result.tradePair}</td>
      <td>{result.price}</td>
      <td>{result.timestamp}</td>
    </tr>
  ));

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
        onClick={handleFindArbitrageClick}
        loading={loading}
      >
        Find arbitrage
      </Button>
      {arbitragePairResult && (
        <Table>
          <thead>
            <tr>
              <th>Exchange</th>
              <th>Trade Pair</th>
              <th>Price</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </Group>
  );
};

export default Exchange;
