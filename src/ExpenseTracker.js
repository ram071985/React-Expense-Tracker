import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm.js";
import ExpensesTable from "./ExpensesTable.js";

class ExpenseTracker extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      name: "",
      transactionDate: new Date(Date.UTC),
      amount: "",
      expenses: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.addRows();
    this.clearForms();
  };

  handleDelete = index => {
    const expenses = [...this.state.expenses];
    expenses.splice(index, 1);
    this.setState({ expenses: expenses });
  };

  addRows = () => {
    const addRow = {
      type: this.state.type,
      name: this.state.name,
      transactionDate: this.state.transactionDate,
      amount: this.state.amount
    };
    this.setState(prevState => {
      return {
        expenses: [...prevState.expenses, addRow]
      };
    });
  };

  clearForms = () => {
    this.setState({
      type: "",
      name: "",
      transactionDate: "",
      amount: ""
    });
  };

  render() {
    return (
      <Container>
        <ExpenseForm
          type={this.state.type}
          name={this.state.name}
          transactionDate={this.state.transactionDate}
          amount={this.state.amount}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ExpensesTable
          expenses={this.state.expenses}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export default ExpenseTracker;
