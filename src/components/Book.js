import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'

const Book = ({ book }) => {
  const chapter = book.chapters.find(c => c.number === 1)

  const toggle = (place, time) => {}

  return (
    <Paper elevation={0}>
      <Box>
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          {book.title}
        </Typography>

        <Typography variant="h6" component="h4" align="center" gutterBottom>
          by {book.authors[0].name} {book.authors[0].initials}{' '}
          {book.authors[0].surname}
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        {chapter.title}
      </Typography>

      <Box maxWidth={chapter.initial.width} mr={1} clone>
        <img
          src={chapter.initial.illustration}
          alt={chapter.initial.letter}
          style={{ float: 'left' }}
        />
      </Box>

      {chapter.paragraphs.map(p =>
        p.illustration ? (
          <Box key={p.number} maxWidth={p.width} ml={1} clone>
            <img
              src={p.illustration}
              alt={p.description}
              style={{ float: 'right' }}
            />
          </Box>
        ) : (
          <Box key={p.number} onClick={() => toggle(p.number, p.timestamp)}>
            <Typography variant="body1" gutterBottom>
              {p.content}
            </Typography>

            <audio controls>
              <source
                src={`${chapter.audio}#t=${p.timestamp}`}
                type="audio/mp3"
              />
            </audio>
          </Box>
        )
      )}
    </Paper>
  )
}

export default Book
