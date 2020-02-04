import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@material-ui/core'

const TopBar = ({ children }) => {
  return (
    <div>
      <AppBar color="default">
        <Toolbar variant="dense" disableGutters>
          {children}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default TopBar
