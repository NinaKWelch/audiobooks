import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#fff'
  },
  player: {
    height: 86
  }
})

const NoAudioTrack = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.player}>{/* add error handling */}</div>
    </div>
  )
}

export default NoAudioTrack
