import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const BookHeader = ({ title, subtitle, authors }) => {
  return (
    <Box my={6} mx={4}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="h3" align="center" gutterBottom>
        {subtitle}
      </Typography>
      {authors.map(author => (
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
  )
}

BookHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
}

BookHeader.defaultProps = {
  subtitle: ''
}

export default BookHeader
