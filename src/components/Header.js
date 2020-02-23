import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  return (
    <div>
      <AppBar color="transparent">
        <Toolbar>
          <Typography variant="h4" component="h1" color="secondary">
            Audiobooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
