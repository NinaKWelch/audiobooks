import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import BookChapter from './BookChapter'

const BookContent = ({ book, handleAudio, handleChapter }) => {
  const [expanded, setExpanded] = useState('')

  const changePanel = panel => (event, newExpanded) => {
    const { id } = event.target
    handleChapter(id)
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div style={{ marginBottom: 72 }}>
      <Box py={3}>
        <Typography variant="h3" align="center" gutterBottom>
          {book.title}
        </Typography>

        {book.authors.map(author => (
          <Typography key={author.id} variant="h4" align="center" gutterBottom>
            {author.name} {author.initials} {author.surname}
          </Typography>
        ))}
      </Box>

      {book.chapters.map(chapter => (
        <BookChapter
          key={chapter.number}
          chapter={chapter}
          expanded={expanded}
          handleChange={changePanel}
          handleAudio={handleAudio}
        />
      ))}
    </div>
  )
}

BookContent.propTypes = {
  book: PropTypes.shape({
    chapters: PropTypes.array,
    authors: PropTypes.array,
    title: PropTypes.string
  }).isRequired,
  handleAudio: PropTypes.func.isRequired,
  handleChapter: PropTypes.func.isRequired
}

export default BookContent
