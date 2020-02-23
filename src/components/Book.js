import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { initializeBook } from '../reducers/bookReducer'
import BookContent from './BookContent'
import NoBookMatch from './NoBookMatch'

const Book = props => {
  const { bookId } = useParams()
  const { book } = props

  useEffect(() => {
    props.initializeBook(bookId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line eqeqeq
    <>{book.id == bookId ? <BookContent book={book} /> : <NoBookMatch />}</>
  )
}

Book.propTypes = {
  initializeBook: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number
  }).isRequired
}

const mapStateToProps = state => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = {
  initializeBook
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
