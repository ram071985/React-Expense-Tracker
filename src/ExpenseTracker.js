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
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  TableRow() {
    const {rows} = this.state.expenses.map(function(expense) {
      return (
        <tr>
          <td>{this.state.type}</td>
          <td>{this.state.name}</td>
          <td>{this.state.date}</td>
          <td>{this.state.amount}</td>
        </tr>
     );
    });
    // rows should equal an array
    // of jsx <row>'s
    
  }
     
  handleClick() {
    //take input 
    const addRow = {
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
     amount: this.state.amount
      
    }
  
    const expenseArray = [this.state.expenses];
    expenseArray.push({addRow});
    console.log(expenseArray)
    this.setState(prevState => {
      return {
        expense: prevState.expenseArray
    
      }
      
    })
console.log(this.state.expenses)
 

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
        <Form.Row className="justify-content-md-center mt-4">
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
        </Form.Row>
        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <ButtonToolbar>
              <Button variant="success" size="lg" onClick={this.handleClick}>
                Add Expense
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows}}
          </tbody>
        </Table>
      </Container>
    );
  }
}


export default ExpenseTracker;


