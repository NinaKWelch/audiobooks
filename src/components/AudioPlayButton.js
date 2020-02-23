import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import {
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.main,
    border: '3px solid',
    borderColor: theme.palette.primary.main
  }
}))

const AudioPlayButton = ({ play, togglePlay }) => {
  const classes = useStyles()

  return (
    <IconButton
      className={classes.button}
      onClick={() => togglePlay(!play)}
      aria-label="play/pause"
    >
      {play ? <PauseIcon /> : <PlayArrowIcon />}
    </IconButton>
  )
}

AudioPlayButton.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  play: PropTypes.bool.isRequired
}

export default AudioPlayButton
