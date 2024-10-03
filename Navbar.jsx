import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' sx={{backgroundColor:'#00000000'}}>
              <Toolbar>
          
              <Typography align='left' variant='h6' component="div" >JOB HUNT</Typography>
                      <Link to='/signin'>
                      <Button variant='contained'>Sign In</Button></Link>&nbsp;
                      <Link to='/login'>
                      <Button variant='contained'>Log In</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar