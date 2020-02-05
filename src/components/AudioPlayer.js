import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, IconButton, Slider } from '@material-ui/core'
import {
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#fff'
  },
  player: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  button: {
    border: '3px solid',
    borderColor: theme.palette.primary.main
  }
}))

const AudioPlayer = ({ chapters }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [endValue, setEndValue] = useState(0)
  const [counter, setCounter] = useState('00:00')
  const [play, setPlay] = useState(false)

  const showProgressInTime = t => {
    // eslint-disable-next-line radix
    let min = parseInt((t / 60) % 60)
    // eslint-disable-next-line radix
    let sec = parseInt(t % 60)

    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    return `${min}:${sec}`
  }

  const handlePlay = event => {
    const { duration } = event.target
    setEndValue(duration)
  }

  const handleUpdate = event => {
    const { currentTime } = event.target
    const time = showProgressInTime(currentTime)
    setCounter(time)
    setValue(currentTime)
  }

  const handleChange = (event, newValue) => {
    const player = document.getElementById('audioPlayer')
    player.currentTime = newValue
    setValue(newValue)
  }

  const togglePlay = state => {
    const player = document.getElementById('audioPlayer')
    player.controls = false
    setPlay(state)

    if (state === true) {
      return player.play()
    }
    return player.pause()
  }

  return (
    <div className={classes.root}>
      <Container className={classes.player}>
        <audio
          id="audioPlayer"
          onCanPlay={handlePlay}
          onTimeUpdate={handleUpdate}
          crossOrigin="anonymous"
        >
          <track kind="captions" label={chapters[0].caption} />
          <source src={chapters[0].audio.file} type="audio/mp3" />
        </audio>
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item>{counter}</Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              step={0.00001}
              min={0.00001}
              max={endValue}
            />
          </Grid>
          <Grid item>{showProgressInTime(endValue)}</Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="play/pause"
              className={classes.button}
              onClick={() => togglePlay(!play)}
            >
              {play ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

AudioPlayer.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AudioPlayer
