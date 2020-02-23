import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import BooksListItem from './BooksListItem'

const BooksList = ({ books }) => {
  return (
    <Grid container component="main" spacing={3}>
      {books.map(book => (
        <BooksListItem item key={book.id} book={book} />
      ))}
    </Grid>
  )
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BooksList
