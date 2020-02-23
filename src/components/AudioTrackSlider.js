import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Slider } from '@material-ui/core'

const AudioTrackSlider = ({ value, endValue, handleChange }) => {
  const showProgressInTime = t => {
    // eslint-disable-next-line radix
    let min = parseInt((t / 60) % 60)
    // eslint-disable-next-line radix
    let sec = parseInt(t % 60)

    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    return `${min}:${sec}`
  }

  return (
    <>
      <Slider
        value={value}
        onChange={handleChange}
        step={0.00001}
        min={0.00001}
        max={endValue}
      />
      <Grid container justify="space-between">
        <Grid item>{showProgressInTime(value)}</Grid>
        <Grid item>{showProgressInTime(endValue)}</Grid>
      </Grid>
    </>
  )
}

AudioTrackSlider.propTypes = {
  value: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default AudioTrackSlider
