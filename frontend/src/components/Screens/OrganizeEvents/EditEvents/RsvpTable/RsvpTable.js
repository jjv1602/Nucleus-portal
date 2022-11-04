import React, { useState } from 'react'
import classes from '../RsvpTable/RsvpTable.module.css'
import { Table } from 'antd';
const RsvpTable = (props) => {
  const [check, setCheck] = useState(false);
 
 
  const columns = [
    
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
    },
    {
      title: 'Date and Time of RSVP',
      dataIndex: 'date_time_of_rsvp',
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={props.list} rowSelection={{
        type: 'checkbox',
        onSelect: (record) => {
          console.log({ record })
        }
      }}
      ></Table>

    </>
  )
}

export default RsvpTable
