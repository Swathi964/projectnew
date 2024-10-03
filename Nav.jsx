import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">Dashboard</Typography>
                <Link to="/m">
                <Button variant="contained">manage job</Button></Link>&nbsp;
                <Link to="/">
                <Button variant="contained">Logout</Button>
           </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav