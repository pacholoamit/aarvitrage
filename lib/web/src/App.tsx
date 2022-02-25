import { Navbar, Hero, Exchange, Footer } from "./components";
import { Center } from "@mantine/core";

const App: React.FC = () => {
  return (
    <Center>
      <div className="App">
        <Navbar />
        <Hero />
        <Exchange />
        <Footer />
      </div>
    </Center>
  );
};

export default App;
