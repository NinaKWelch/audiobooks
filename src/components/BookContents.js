import React from 'react'
import PropTypes from 'prop-types'
import TopBar from './TopBar'
import BookHeader from './BookHeader'
import BookContentsNestedList from './BookContentsNestedList'
import BookContentsList from './BookContentsList'

const BookContents = ({ book }) => {
  return (
    <div>
      <TopBar />
      <BookHeader
        title={book.title}
        subtitle={book.subtitle}
        authors={book.authors}
      />

      {book.parts.length > 1 ? (
        <BookContentsNestedList parts={book.parts} />
      ) : (
        <BookContentsList part={book.parts[0]} />
      )}
    </div>
  )
}

BookContents.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.object).isRequired,
    parts: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

BookContents.defaultProps = {
  book: PropTypes.shape({
    subtitle: ''
  })
}

export default BookContents
