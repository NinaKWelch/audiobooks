import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import Header from './Header'
import BookList from './BookList'
import Footer from './Footer'

const Library = ({ catalogue }) => {
  return (
    <div>
      <Header />
      <Container>
        <BookList books={catalogue} />
      </Container>
      <Footer />
    </div>
  )
}

Library.propTypes = {
  catalogue: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Library
