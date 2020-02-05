import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import BookSection from './BookSection'

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

      {chapter.sections.map(section => (
        <BookSection key={section.number} section={section} />
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
    sections: PropTypes.array
  }).isRequired
}

export default BookChapter
