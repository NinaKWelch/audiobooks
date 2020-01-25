import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Book = ({ book }) => {
  const chapter = book.chapters.find(c => c.number === 1)

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {book.volumeInfo.title}
      </Typography>

      <Typography variant="h4" gutterBottom>
        {book.volumeInfo.authors[0]}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {chapter.title}
      </Typography>

      {chapter.paragraphs.map(p => (
        <Typography key={p.number} variant="body1" gutterBottom>
          {p.content}
        </Typography>
      ))}
    </Box>
  )
}

export default Book
