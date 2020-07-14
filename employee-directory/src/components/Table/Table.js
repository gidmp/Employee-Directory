import React from "react";
import TableRow from "./TableRow/TableRow"
import "./Table.css"

function Table(props) {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
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