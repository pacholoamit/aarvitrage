import { Grid } from "@mantine/core";
import { Exchange, Footer } from "../components";

const HomePage: React.FC = () => {
  return (
    <Grid justify={"center"}>
      <Grid.Col lg={9} md={12}>
        <Exchange />
        <Footer />
      </Grid.Col>
    </Grid>
  );
};

export default HomePage;
