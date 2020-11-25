import React from "react";
import TitleText from "./Components/TitleText.js";
import ExpenseTracker from "./Components/ExpenseTracker";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <TitleText />
      <ExpenseTracker />
    </Container>
  );
}

export default App;
