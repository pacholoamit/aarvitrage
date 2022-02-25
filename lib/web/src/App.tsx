import { useState } from "react";
import { Navbar, Hero, Exchange, Footer, ThemeToggle } from "./components";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeToggle />
      <Navbar />
      <Hero />
      <Exchange />
      <Footer />
    </div>
  );
};

export default App;
