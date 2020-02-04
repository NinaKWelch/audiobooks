import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import BookListItem from './BookListItem'

const BookList = ({ books }) => {
  return (
    <Grid container component="main" spacing={3}>
      {books.map(book => (
        <BookListItem item key={book.id} book={book} />
      ))}
    </Grid>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BookList
