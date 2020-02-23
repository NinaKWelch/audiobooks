import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import { initializeCatalogue } from './reducers/catalogueReducer'
import Library from './components/Library'

const App = props => {
  useEffect(() => {
    props.initializeCatalogue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Library />
    </Router>
  )
}

App.propTypes = {
  initializeCatalogue: PropTypes.func.isRequired
}

export default connect(null, { initializeCatalogue })(App)
