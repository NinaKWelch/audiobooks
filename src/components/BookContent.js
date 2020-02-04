import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@material-ui/core'
import BookChapter from './BookChapter'

const BookContent = ({ book }) => {
  return (
    <Paper elevation={0}>
      <Box>
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          {book.title}
        </Typography>

        {book.authors.map(author => (
          <Typography
            key={author.id}
            variant="h6"
            component="h4"
            align="center"
            gutterBottom
          >
            {author.name} {author.initials} {author.surname}
          </Typography>
        ))}
      </Box>

      {book.chapters.map(chapter => (
        <BookChapter key={chapter.number} chapter={chapter} />
      ))}
    </Paper>
  )
}

BookContent.propTypes = {
  book: PropTypes.shape({
    chapters: PropTypes.array,
    authors: PropTypes.array,
    title: PropTypes.string
  }).isRequired
}

export default BookContent
