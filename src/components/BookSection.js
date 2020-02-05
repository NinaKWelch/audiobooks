import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const BookSection = ({ section }) => {
  if (section.type === 'illustration') {
    return (
      <Box
        maxWidth={section.width}
        ml={section.position === 'right' ? 1 : 0}
        mr={section.position === 'left' ? 1 : 0}
        clone
      >
        <figure style={{ float: `${section.position}` }}>
          <img src={section.content} alt={section.alt} />
          <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
            {section.caption}
          </figcaption>
        </figure>
      </Box>
    )
  }

  if (section.type === 'rhyme') {
    return (
      <Box mb={2}>
        {section.content.map(c => (
          <Typography key={c.number} variant="body1" align="center">
            {c.line}
          </Typography>
        ))}
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {section.content}
      </Typography>
    </Box>
  )
}

BookSection.propTypes = {
  section: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    illustration: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    width: PropTypes.number,
    position: PropTypes.string
  }).isRequired
}

export default BookSection
