import React from "react";
import { Tabs } from "@itwin/itwinui-react";

const stableLabels = ["A", "B"];

function App() {
  return (
    <>
      <Tabs labels={stableLabels} />
      <br />
      Switch between tabs, notice the overlay error.
    </>
  );
}

export default App;
