import React, { useState } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'

const AudioPlayerMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Bottom</Button>
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        onClick={() => setOpen(!open)}
      >
        <div>Hello</div>
      </SwipeableDrawer>
    </div>
  )
}

export default AudioPlayerMobile
