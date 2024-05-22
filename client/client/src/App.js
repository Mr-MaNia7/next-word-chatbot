import React from "react";
import InlineTextPrediction from "./InlineTextPrediction";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <InlineTextPrediction />
      </Container>
    </React.Fragment>
  );
}

export default App;
