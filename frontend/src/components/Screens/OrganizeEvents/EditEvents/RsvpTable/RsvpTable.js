import React from 'react'
import { Table } from 'react-bootstrap'
import classes from '../RsvpTable/RsvpTable.module.css'
const RsvpTable = (props) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className={classes.tr}>
                        <th>#</th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Date and Time of Rsvp</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((i,index) => {

                        return (
                        <tr>
                            <td><input type="checkbox" name={i._id} /></td>
                            <td>{index}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.contact}</td>
                            <td>{i.date}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table >
        </>
    )
}

export default RsvpTable
