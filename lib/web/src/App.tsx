import { Hero, Exchange, Footer, NavShell } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavShell>
        <Hero />
        <Exchange />
        <Footer />
      </NavShell>
    </div>
  );
};

export default App;
