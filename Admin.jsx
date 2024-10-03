import { Button, TextField } from '@mui/material'
import React from 'react'
import Navbar from './Navbar';

const Admin = () => {
  return (
    <div>
      <>
      <Navbar/>
      <h1 style={{ color: 'blue' }}  >WELCOME TO LOGIN PAGE</h1>
      <TextField label='Username' variant='filled'></TextField><br></br><br></br>
        <TextField label='Password' variant='filled'></TextField><br></br><br></br>
        <Button variant='contained'>Clear All</Button> &nbsp;
        <Button variant='contained'>Submit</Button>
        </>
    </div>
  )
}

export default Admin