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
      transactiondate: new Date(Date.UTC),
      amount: "",
      expenses: []
    };
    
  }
   

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit = () => {
  this.addRows()
  }



handleDelete = index => {
 const expenses = [...this.state.expenses]
 expenses.splice(index, 1);
 this.setState({expenses: expenses})

}


 renderRows = (expense, index) => {
    return (
      <tr key={index}>
        <td>{expense.type}</td>
        <td>{expense.name}</td>
        <td>{expense.transactiondate}</td>
        <td>{expense.amount}</td>
        <td><ButtonToolbar>
        <Button variant="outline-light" onClick={this.handleDelete}>X</Button>
          </ButtonToolbar></td>
      </tr>

    )
    
  }


  addRows() {
    const addRow = {
      type: this.state.type,
      name: this.state.name,
      transactiondate: this.state.transactiondate,
     amount: this.state.amount
    };
    this.setState(prevState => {
     return { 
      expenses: [...prevState.expenses, addRow],
    }
    });
    

  }
  
  render() {
  
    return (
      <Container>
        <Form>
        <Form.Row className="justify-content-md-center mt-2">
          <Col md="auto">
            <h4 className="text-body">Type:</h4>
          </Col>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              value={this.state.type}
              name="type"
              onChange={this.handleChange}
            >
              <option>Choose..</option>
              <option>Cash</option>
              <option>Debit Card</option>
              <option>Credit Card</option>
              <option>Check</option>
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
        <Form.Row>
        <Col md="auto">
            <h4 className="text-body">Date:</h4>
          </Col>
          <Form.Group as={Col} >
            <Form.Control
              type="date"
              value={this.state.transactiondate}
              name="transactiondate"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Col md="auto">
            <h4 className="text-body">Amount:</h4>
          </Col>
          <Form.Group as={Col} controlId="amountSpent">
            <Form.Control
              type="input"
              value={this.state.amount}
              name="amount"
              onChange={this.handleChange}
            />
          </Form.Group>
          </Form.Row>
          <Row className="justify-content-md-center mt-1">
            <Col md="auto">
              <ButtonToolbar>
                <Button variant="success" size="lg" onClick={this.handleSubmit}>
                  Add Expense
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
</Form>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody> 
            {this.state.expenses.map(this.renderRows)}
           

     
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ExpenseTracker;
