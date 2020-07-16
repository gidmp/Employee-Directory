import React from "react";
import "./TableRow.css";
import Moment from "moment";

function TableRow(props){
  //use moment package to reformat date
  const dob = Moment(props.dob).format("L")
  return (
    <tr>
      <td><img src = {props.image} alt = "employee mugshot"/></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{dob}</td>
    </tr>
  )
}

export default TableRow;