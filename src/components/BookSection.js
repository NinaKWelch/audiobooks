import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BookSectionContent from './BookSectionContent'
import BookSectionAudio from './BookSectionAudio'

const BookSection = ({ section, audiobookId }) => {
  const [marker, setMarker] = useState(null)

  const toggleAudioByText = async id => {
    // eslint-disable-next-line eqeqeq
    const subsection = await section.subsections.find(s => s.id == id)
    setMarker(subsection.marker.id)
  }

  return (
    <>
      <BookSectionContent section={section} handleAudio={toggleAudioByText} />
      <BookSectionAudio
        audiobookId={audiobookId}
        sectionId={section.id}
        marker={marker}
      />
    </>
  )
}

BookSection.propTypes = {
  section: PropTypes.shape().isRequired,
  audiobookId: PropTypes.number.isRequired
}

export default BookSection
