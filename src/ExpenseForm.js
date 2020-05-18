import React, { Component } from "react";
import { Form, Button, Col, Row, ButtonToolbar } from 'react-bootstrap';

class ExpenseForm extends Component {
  render() {
    return(
        <Form>
        <Form.Row className="justify-content-md-center mt-2">
          <Col md="auto">
            <h4 className="text-body">Type:</h4>
          </Col>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              value={this.props.type}
              name="type"
              onChange={this.props.handleChange}
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
              value={this.props.name}
              placeholder="Where was the expense made?"
              name="name"
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col md="auto">
            <h4 className="text-body">Date:</h4>
          </Col>
          <Form.Group as={Col}>
            <Form.Control
              type="date"
              value={this.props.transactionDate}
              name="transactionDate"
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Col md="auto">
            <h4 className="text-body">Amount:</h4>
          </Col>
          <Form.Group as={Col} controlId="amountSpent">
            <Form.Control
              type="input"
              value={this.props.amount}
              name="amount"
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Row className="justify-content-md-center mt-1">
          <Col md="auto">
            <ButtonToolbar>
              <Button variant="success" size="lg" onClick={this.props.handleSubmit}>
                Add Expense
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default ExpenseForm;