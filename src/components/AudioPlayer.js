import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const player = document.getElementById('audioPlayer')

    player.addEventListener('timeupdate', () => {
      const { duration, currentTime } = player
      const pointer = (currentTime / duration).toFixed(3)
      const time = showProgressInTime(currentTime)

      setCounter(time)
      setValue(pointer)
    })
  }, [value])

  const handleChange = (event, newValue) => {
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
        <audio id="audioPlayer">
          <track kind="captions" label={chapters[0].title} />
          <source src={chapters[0].audio.file} type="audio/mp3" />
        </audio>
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item>{counter}</Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              step={0.001}
              min={0.001}
              max={1.306}
            />
          </Grid>
          <Grid item>{chapters[0].audio.duration}</Grid>
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
