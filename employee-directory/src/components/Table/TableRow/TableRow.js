import React from "react";
import "./TableRow.css"

function TableRow(props){
    return (
      <tr>
        <td><img src = {props.image} alt = "employee mugshot"/></td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    )
}

export default TableRow;