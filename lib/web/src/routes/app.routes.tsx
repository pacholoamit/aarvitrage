import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavShell } from "../components";
import publicRoutes from "./public.routes";

const routes = publicRoutes.map((route, i) => (
  <Route path={route.path} element={route.element} key={i} />
));

const AppRoutes = () => {
  return (
    <Router>
      <NavShell>
        <Routes>{routes}</Routes>
      </NavShell>
    </Router>
  );
};

export default AppRoutes;
