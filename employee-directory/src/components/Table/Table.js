import React from "react";
import TableRow from "./TableRow/TableRow"
import "./Table.css"

function Table(props) {
    return (
        <section id = "table-form">
            <table>
                <thead>
                    <tr>
                        <th scope="col" id ="image" onClick = {props.handleSorting}>Image</th>
                        <th scope="col" id ="name" onClick = {props.handleSorting}><i className="fas fa-sort" /> Name</th>
                        <th scope="col" id ="phone" onClick = {props.handleSorting}><i className="fas fa-sort" /> Phone</th>
                        <th scope="col" id ="email" onClick = {props.handleSorting}><i className="fas fa-sort" /> Email</th>
                        <th scope="col" id = "dob" onClick = {props.handleSorting}><i className="fas fa-sort" /> DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map the passed api response and pass it as props to each table rows */}
                    {props.employees.map(employee =>(
                        <TableRow
                            image = {employee.picture.thumbnail}
                            name = {`${employee.name.first} ${employee.name.last}`}
                            phone = {employee.phone}
                            email = {employee.email}
                            dob = {employee.dob.date}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table;