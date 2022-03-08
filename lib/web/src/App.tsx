import { NavShell } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorPage, HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <NavShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </NavShell>
    </Router>
  );
};

export default App;
