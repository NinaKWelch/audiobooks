import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import BookParagraph from './BookParagraph'

const BookChapter = ({ chapter }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {chapter.title}
      </Typography>

      {chapter.initial ? (
        <Box maxWidth={chapter.initial.width} mr={1} clone>
          <img
            src={chapter.initial.illustration}
            alt={chapter.initial.letter}
            style={{ float: `${chapter.initial.position}` }}
          />
        </Box>
      ) : (
        ''
      )}

      {chapter.paragraphs.map(paragraph => (
        <BookParagraph key={paragraph.number} paragraph={paragraph} />
      ))}
    </div>
  )
}

BookChapter.propTypes = {
  chapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    initial: PropTypes.shape({
      width: PropTypes.number,
      illustration: PropTypes.string,
      letter: PropTypes.string,
      position: PropTypes.string
    }),
    paragraphs: PropTypes.array.isRequired
  }).isRequired
}

export default BookChapter
