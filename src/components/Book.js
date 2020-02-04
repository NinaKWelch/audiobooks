import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography, IconButton } from '@material-ui/core'
import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons'
import TopBar from './TopBar'
import AudioPlayer from './AudioPlayer'
import BookContent from './BookContent'

const Book = ({ book }) => {
  return (
    <div>
      <TopBar>
        <IconButton color="inherit" aria-label="back">
          <NavigateBeforeIcon />
        </IconButton>
        <Typography>Back</Typography>
      </TopBar>
      <Container>
        <BookContent book={book} />
      </Container>
      <AudioPlayer chapters={book.chapters} />
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.shape().isRequired
}

export default Book
