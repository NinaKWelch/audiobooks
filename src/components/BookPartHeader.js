import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const BookPartHeader = ({ title, subtitle }) => {
  return (
    <Box my={3}>
      <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  )
}

BookPartHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

BookPartHeader.defaultProps = {
  subtitle: ''
}

export default BookPartHeader
