import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1">
            Audiobooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
