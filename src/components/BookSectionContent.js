import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box, Typography } from '@material-ui/core'
import BookSubsection from './BookSubsection'

const BookSectionContent = ({ section, handleAudio }) => {
  return (
    <Container style={{ marginBottom: 100 }}>
      <Box my={4}>
        <Typography variant="h4" align="center">
          {section.title}
        </Typography>
      </Box>
      {section.initial ? (
        <Box maxWidth={section.initial.width} mr={1} clone>
          <img
            src={section.initial.illustration}
            alt={section.initial.letter}
            style={{ float: 'left' }}
          />
        </Box>
      ) : (
        ''
      )}
      {section.subsections.map(subsection => (
        <BookSubsection
          key={subsection.id}
          subsection={subsection}
          handleAudio={handleAudio}
        />
      ))}
    </Container>
  )
}

BookSectionContent.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    initial: PropTypes.shape(),
    subsections: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  handleAudio: PropTypes.func.isRequired
}

BookSectionContent.defaultProps = {
  section: PropTypes.shape({
    initial: null
  })
}

export default BookSectionContent
