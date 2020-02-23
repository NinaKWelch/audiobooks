import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Comment as CommentIcon } from '@material-ui/icons'
import TopBar from './TopBar'

const useStyles = makeStyles(theme => ({
  chat: {
    '&:hover': {
      color: theme.palette.secondary.main
    },
    '&:active': {
      color: theme.palette.secondary.main
    }
  }
}))

const BookSectionTopNav = ({ url }) => {
  const classes = useStyles()

  return (
    <TopBar handleLink={`/books/${url}`}>
      <div>
        <IconButton aria-label="open comments" className={classes.chat}>
          <CommentIcon />
        </IconButton>
      </div>
    </TopBar>
  )
}

BookSectionTopNav.propTypes = {
  url: PropTypes.number.isRequired
}

export default BookSectionTopNav
