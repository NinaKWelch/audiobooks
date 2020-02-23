import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const BookPartPrologue = ({ prologue }) => {
  return (
    <>
      {prologue.map(p =>
        p.type === 'rhyme' ? (
          <Box key={p.id} mb={3}>
            {p.content.map(c => (
              <Typography key={c.id} variant="subtitle1" align="center">
                {c.line}
              </Typography>
            ))}
          </Box>
        ) : (
          <Box key={p.id} mx={2} mb={3}>
            <Typography variant="subtitle1" align="center">
              {p.content}
            </Typography>
          </Box>
        )
      )}
    </>
  )
}

BookPartPrologue.propTypes = {
  prologue: PropTypes.arrayOf(PropTypes.object)
}

BookPartPrologue.defaultProps = {
  prologue: ''
}

export default BookPartPrologue
