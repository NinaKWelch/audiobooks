import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const TopBar = ({ handleLink, children }) => {
  const history = useHistory()
  const classes = useStyles()

  const handleClick = () => {
    history.push(handleLink)
  }

  return (
    <>
      <AppBar color="default">
        <Toolbar className={classes.root}>
          <Button
            onClick={handleClick}
            color="inherit"
            size="large"
            startIcon={<NavigateBeforeIcon />}
            aria-label="back"
          >
            Back
          </Button>
          {children}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

TopBar.propTypes = {
  handleLink: PropTypes.string,
  children: PropTypes.node
}

TopBar.defaultProps = {
  handleLink: '/books',
  children: ''
}

export default TopBar
