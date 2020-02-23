import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  image: {
    width: '100%'
  },
  caption: {
    textAlign: 'center',
    fontStyle: 'italic'
  },
  section: {
    cursor: 'pointer'
  }
})

const BookSubsection = ({ subsection, handleAudio }) => {
  const classes = useStyles()

  if (subsection.type === 'illustration') {
    return (
      <Box
        mt={0}
        ml={subsection.position === 'right' ? 2 : 0}
        mr={subsection.position === 'left' ? 2 : 0}
        clone
      >
        <figure style={{ float: `${subsection.position}` }}>
          <img
            src={subsection.content}
            alt={subsection.alt}
            className={classes.image}
          />
          <figcaption className={classes.caption}>
            {subsection.caption}
          </figcaption>
        </figure>
      </Box>
    )
  }

  if (subsection.type === 'rhyme') {
    return (
      <Box
        mb={2}
        className={classes.section}
        onClick={() => handleAudio(subsection.id)}
      >
        {subsection.content.map(c => (
          <Typography key={c.id} variant="body1" align="center">
            {c.line}
          </Typography>
        ))}
      </Box>
    )
  }

  return (
    <Box className={classes.section} onClick={() => handleAudio(subsection.id)}>
      <Typography variant="body1" gutterBottom>
        {subsection.content}
      </Typography>
    </Box>
  )
}

BookSubsection.propTypes = {
  subsection: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    illustration: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    width: PropTypes.number,
    position: PropTypes.string
  }).isRequired,
  handleAudio: PropTypes.func.isRequired
}

export default BookSubsection
