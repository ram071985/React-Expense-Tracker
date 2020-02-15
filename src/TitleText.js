import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

function TitleText() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1 className="display-1">Expense Tracker</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h2 className="text-success">Add A New Item:</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleText;
