import AppProvider from "./providers/app.provider";
import AppRoutes from "./routes/app.routes";

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
