import React from "react";
import { Button, ButtonGroup } from "@itwin/itwinui-react";

function App() {
  return (
    <>
      <ButtonGroup
        style={{ width: "20%" }}
        overflowButton={() => (
          <Button size="small" styleType="borderless">
            More
          </Button>
        )}
      >
        <Button>Long enough button</Button>
      </ButtonGroup>
      <br />
      Resize window so the button is more or less than 20% of the window.
    </>
  );
}

export default App;
