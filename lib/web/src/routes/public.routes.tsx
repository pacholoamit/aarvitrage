import { ErrorPage, HomePage } from "../pages";

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <ErrorPage /> },
];

export default publicRoutes;
