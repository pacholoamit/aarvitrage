import { useState } from "react";
import { Button } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>Hello</Button>
    </div>
  );
}

export default App;
