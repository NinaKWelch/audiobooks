import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Slider
} from '@material-ui/core'
import {
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon
} from '@material-ui/icons'
import cover from '../media/cover.jpg'

const AudioPlayer = () => {
  const [value, setValue] = React.useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <div>
        <CardMedia
          image={cover}
          title="book cover"
          style={{ width: 200, height: 200 }}
        />
      </div>
      <div>
        <CardContent>
          <Typography variant="h5">Alice In Wonderland</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lewis Carroll
          </Typography>
        </CardContent>
        <div>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
          <IconButton size="small" aria-label="previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton color="primary" aria-label="play/pause">
            <PlayArrowIcon />
          </IconButton>
          <IconButton size="small" aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default AudioPlayer
