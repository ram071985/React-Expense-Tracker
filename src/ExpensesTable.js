import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

class ExpensesTable extends Component {
    renderRows = (expense, index) => {
        return (
          <tr key={index}>
            <td>{expense.type}</td>
            <td>{expense.name}</td>
            <td>{expense.transactionDate}</td>
            <td>
              <span>$</span>
              {expense.amount}
            </td>
            <td>
              <ButtonToolbar>
                <Button
                  variant="outline-light"
                  onClick={e => this.props.handleDelete(index)}
                >
                  X
                </Button>
              </ButtonToolbar>
            </td>
          </tr>
        );
      };

  render() {
    return(
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
        <tbody>{this.props.expenses.map(this.renderRows)}</tbody>
      </Table>
    )
  }
}

export default ExpensesTable;
