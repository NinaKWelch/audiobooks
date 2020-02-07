import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, IconButton } from '@material-ui/core'
import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons'
import TopBar from './TopBar'
import AudioPlayer from './AudioPlayer'
import BookContent from './BookContent'

const Book = ({ book }) => {
  const [track, setTrack] = useState(book.chapters[0])

  const loadPlayer = () => {
    const player = document.getElementById('audioPlayer')
    player.load()
  }

  const toggleChapter = async id => {
    loadPlayer()
    const chapter = await book.chapters.find(c => c.number == id)
    setTrack(chapter)
  }

  const toggleAudio = t => {
    const player = document.getElementById('audioPlayer')
    player.currentTime = t
  }

  return (
    <div>
      <TopBar>
        <IconButton color="inherit" aria-label="back">
          <NavigateBeforeIcon />
        </IconButton>
        <Typography>Back</Typography>
      </TopBar>
      <BookContent
        book={book}
        handleChapter={toggleChapter}
        handleAudio={toggleAudio}
      />
      <AudioPlayer track={track.audio} />
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.shape().isRequired
}

export default Book
