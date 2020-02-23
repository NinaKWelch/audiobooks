import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import AudioPlayButton from './AudioPlayButton'
import AudioTrackSlider from './AudioTrackSlider'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#fff'
  },
  player: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))

const AudioBar = ({ track, marker }) => {
  const classes = useStyles()
  const player = useRef(null)
  const [value, setValue] = useState(0)
  const [endValue, setEndValue] = useState(0)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    player.current.load()
  }, [track])

  useEffect(() => {
    const handleText = () => {
      // eslint-disable-next-line eqeqeq
      const location = track.markers.find(m => m.id == marker)
      player.current.currentTime = location.value
      setValue(location.value)
    }

    if (marker) {
      handleText()
    }
  }, [marker, track.markers])

  const handleUpdate = event => {
    const { currentTime } = event.target
    setValue(currentTime)
  }

  const handleChange = (event, newValue) => {
    player.current.currentTime = newValue
    setValue(newValue)
  }

  const handleDuration = event => {
    const { duration } = event.target
    setEndValue(duration)
  }

  const togglePlay = state => {
    setPlay(state)

    if (state) {
      return player.current.play()
    }
    return player.current.pause()
  }

  return (
    <div className={classes.root}>
      <Container className={classes.player}>
        <audio
          ref={player}
          onCanPlay={handleDuration}
          onTimeUpdate={handleUpdate}
          crossOrigin="anonymous"
        >
          <track kind="captions" label={track.section.title} />
          <source src={track.file} type="audio/mp3" />
        </audio>
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item xs>
            <AudioTrackSlider
              value={value}
              endValue={endValue}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item>
            <AudioPlayButton play={play} togglePlay={togglePlay} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

AudioBar.propTypes = {
  track: PropTypes.shape().isRequired,
  marker: PropTypes.number
}

AudioBar.defaultProps = {
  marker: null
}

export default AudioBar
