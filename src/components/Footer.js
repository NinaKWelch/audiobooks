import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <Grid
      container
      component="footer"
      justify="flex-end"
      style={{ marginTop: 25, borderTop: '1px solid gray' }}
    >
      <Grid item>
        <Typography variant="body2">
          Copyright &copy; 2020 <strong>Nina Welch</strong>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
