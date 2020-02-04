import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import Header from './Header'
import BookList from './BookList'
import Footer from './Footer'

const Books = ({ books }) => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: 25 }}>
        <BookList books={books} />
      </Container>
      <Footer />
    </div>
  )
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Books
