import { Navbar, Hero, Exchange, Footer } from "./components";
import "./App.css";

const App: React.FC = () => {
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
