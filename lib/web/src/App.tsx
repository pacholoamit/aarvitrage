import { useState } from "react";
import { Navbar, Hero, Exchange, Footer } from "./components";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exchange />
      <Footer />
    </div>
  );
};

export default App;
