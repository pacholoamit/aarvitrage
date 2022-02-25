import React from "react";
import { Autocomplete } from "@mantine/core";

const Exchange: React.FC = () => {
  return (
    <React.Fragment>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
    </React.Fragment>
  );
};

export default Exchange;
