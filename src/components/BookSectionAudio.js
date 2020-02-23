import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initializeTrack } from '../reducers/trackReducer'
import AudioBar from './AudioBar'
import NoAudioTrack from './NoAudioTrack'

const BookSectionAudio = props => {
  const { audiobookId, sectionId, marker, track } = props

  useEffect(() => {
    props.initializeTrack(audiobookId, sectionId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>{track ? <AudioBar track={track} marker={marker} /> : <NoAudioTrack />}</>
  )
}

BookSectionAudio.propTypes = {
  audiobookId: PropTypes.number.isRequired,
  sectionId: PropTypes.number.isRequired,
  initializeTrack: PropTypes.func.isRequired,
  track: PropTypes.shape(),
  marker: PropTypes.number
}

BookSectionAudio.defaultProps = {
  track: null,
  marker: null
}

const mapStateToProps = state => {
  return {
    track: state.track
  }
}

const mapDispatchToProps = {
  initializeTrack
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSectionAudio)
