import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function TableRow() {
  return (

    <Table striped bordered hover variant="dark">
        <tr>
          <td>{this.state.type}</td>
          <td>{this.state.name}</td>
          <td>{this.state.date}</td>
          <td>{this.state.amount}</td>
        </tr>
    </Table>
  );
}

export default TableRow