import { Exchange, Footer, NavShell } from "./components";
import "./App.css";
import { Grid } from "@mantine/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavShell>
        <Grid justify={"center"}>
          <Grid.Col lg={9} md={12}>
            <Exchange />
            <Footer />
          </Grid.Col>
        </Grid>
      </NavShell>
    </div>
  );
};

export default App;
