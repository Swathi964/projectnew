import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>Dashboard</Typography>
                <Link to="/b">
                <Button variant="contained" >Browse Job </Button></Link>
                <Link to="/a">
                <Button variant="contained">Applied Job </Button></Link>
                <Link to= "/">            
                <Button variant="contained">Logout</Button></Link>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar