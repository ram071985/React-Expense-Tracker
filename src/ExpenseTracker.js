import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Form,
  Row,
  Button,
  ButtonToolbar,
  Table
} from "react-bootstrap";
import TableRow from "./TableRow"

class ExpenseTracker extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      name: "",
      date: "",
      amount: "",
      expenses: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const addRow = {
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
     amount: this.state.amount
      
    }
    this.setState(prevState => {
      prevState.expenses.push([...prevState.expenses, addRow])


console.log(this.state)
 
    })
      
 

  }


  render() {

    return (
      <Container>
        <Form.Row className="justify-content-md-center mt-4">
          <Col md="auto">
            <h4 className="text-body">Type:</h4>
          </Col>
          <Form.Group as={Col} controlId="expenseType">
            <Form.Control
              as="select"
              value={this.state.type}
              name="type"
              onChange={this.handleChange}
            >
              <option>Cash</option>
              <option>Charge</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Col md="auto">
            <h4 className="text-body">Name:</h4>
          </Col>
          <Form.Group as={Col} controlId="whereSpent">
            <Form.Control
              type="input"
              value={this.state.name}
              placeholder="Where was the expense made?"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row
          className="justify-content-md-center mt-4"
          onSubmit={this.handleSubmit}
        >
          <Col md="auto">
            <h4 className="text-body">Date:</h4>
          </Col>
          <Form.Group as={Col} controlId="date">
            <Form.Control
              name="date"
              type="text"
              placeholder="mm/dd/yyyy"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Col md="auto">
            <h4 className="text-body">Amount:</h4>
          </Col>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="input"
              value={this.state.amount}
              name="amount"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Row className="justify-content-md-center mt-5">
            <Col md="auto">
              <ButtonToolbar>
                <Button variant="success" size="lg" onClick={this.handleSubmit}>
                  Add Expense
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Form.Row>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
   
        </Table>
      </Container>
    );
  }
}

export default ExpenseTracker;
