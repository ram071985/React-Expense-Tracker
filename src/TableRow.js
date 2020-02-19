import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function TableRow() {
  return (

    <Table striped bordered hover variant="dark">
        <tr>
          <td>{this.type}</td>
          <td>{this.name}</td>
          <td>{this.date}</td>
          <td>{this.amount}</td>
        </tr>
    </Table>
  );
}

export default TableRow