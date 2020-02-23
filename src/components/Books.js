import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import Header from './Header'
import BooksList from './BooksList'
import Footer from './Footer'

const Books = ({ catalogue }) => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: 25 }}>
        <BooksList books={catalogue} />
      </Container>
      <Footer />
    </div>
  )
}

Books.propTypes = {
  catalogue: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => {
  return {
    catalogue: state.catalogue
  }
}

export default connect(mapStateToProps)(Books)
