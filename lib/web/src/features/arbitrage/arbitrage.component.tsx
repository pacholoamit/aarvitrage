import React from "react";
import { Autocomplete, Button, Table, Group } from "@mantine/core";

const Arbitrage: React.FC = () => {
  const [loading, setIsLoading] = React.useState(false);

  // const rows = arbitragePairResult?.map((result) => (
  //   <tr key={result.exchangeId}>
  //     <td>{result.exchangeId}</td>
  //     <td>{result.tradePair}</td>
  //     <td>{result.price}</td>
  //     <td>{result.timestamp}</td>
  //   </tr>
  // ));

  return (
    <Group position="center" direction="column">
      <Autocomplete
        label="Select Trade pair"
        placeholder="BTC/USDT"
        data={["BTC/USDT"]}
        name="symbols"
        // onChange={}
      />
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        // onClick={}
        loading={loading}
      >
        Find arbitrage
      </Button>

      {/* <Table>
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Trade Pair</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table> */}
    </Group>
  );
};

export default Arbitrage;
