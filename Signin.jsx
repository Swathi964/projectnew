import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div class="back">
      <div class="sign" >
      <Box
      component="form"
      noValidate
      autoComplete="off" sx={{backgroundColor:'#00000000'}}>
      
      <Typography variant='h4'color="blue">REGISTER</Typography><br/>
        <TextField label='Full Name' variant='filled'></TextField><br></br><br></br>
        <TextField label='Email' variant='filled'></TextField><br></br><br></br>
        <TextField label='Phone Number' variant='filled'></TextField><br></br><br></br>
        <TextField label='Password' variant='filled'></TextField><br></br><br></br>
    <br></br>
    
    <Link to='/login'>
        <Button variant='contained'>Submit</Button></Link>
        <br/><br/>
        Already a user?
        <Link to='/login'>Login
        </Link><br></br><br></br>
        <Link to='/'>
                      <Button variant='contained'>Home</Button></Link>&nbsp;
        
        </Box>
        </div>
    </div>
  )
}

export default Signin