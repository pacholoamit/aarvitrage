import { Grid } from "@mantine/core";
import { Footer } from "../components";
import { Arbitrage } from "../features/arbitrage";

export { default as Arbitrage } from "../features/arbitrage/arbitrage.component";
const HomePage: React.FC = () => {
  return (
    <Grid justify={"center"}>
      <Grid.Col lg={9} md={12}>
        <Arbitrage />
        <Footer />
      </Grid.Col>
    </Grid>
  );
};

export default HomePage;
