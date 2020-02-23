import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import NoBookMatch from './NoBookMatch'
import BookSectionTopNav from './BookSectionTopNav'
import BookPartHeader from './BookPartHeader'
import BookPartPrologue from './BookPartPrologue'
import BookSection from './BookSection'

const BookPartSection = props => {
  const { sectionId } = useParams()
  const { book, part } = props

  // eslint-disable-next-line eqeqeq
  const section = part.sections.find(s => s.id == sectionId)

  if (!section) {
    return <NoBookMatch />
  }

  return (
    <div>
      <BookSectionTopNav url={book.id} />
      {part.type && part.sections[0].id === section.id ? (
        <>
          <BookPartHeader title={part.title} subtitle={part.subtitle} />
          <BookPartPrologue prologue={part.prologue} />
          <BookSection audiobookId={book.audiobook.id} section={section} />
        </>
      ) : (
        <BookSection audiobookId={book.audiobook.id} section={section} />
      )}
    </div>
  )
}

BookPartSection.propTypes = {
  book: PropTypes.shape().isRequired,
  part: PropTypes.shape().isRequired
}

const getPartById = (obj, id) => {
  // eslint-disable-next-line eqeqeq
  return obj.parts.find(p => p.id == id)
}

const mapStateToProps = (state, ownProps) => {
  const { book } = state
  const { partId } = ownProps
  const part = getPartById(book, partId)
  return {
    book,
    part
  }
}

export default connect(mapStateToProps)(BookPartSection)
