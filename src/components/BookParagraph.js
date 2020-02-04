import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const BookParagraph = ({ paragraph }) => {
  if (paragraph.illustration) {
    return (
      <Box maxWidth={paragraph.width} ml={1} clone>
        <img
          src={paragraph.illustration}
          alt={paragraph.description}
          style={{ float: `${paragraph.position}` }}
        />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {paragraph.content}
      </Typography>
    </Box>
  )
}

BookParagraph.propTypes = {
  paragraph: PropTypes.shape({
    content: PropTypes.string,
    illustration: PropTypes.string,
    description: PropTypes.string,
    width: PropTypes.number,
    position: PropTypes.string
  }).isRequired
}

export default BookParagraph
