import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import catalogueService from './services/catalogue'
import Library from './components/Library'

const App = () => {
  const [catalogue, setCatalogue] = useState([])

  useEffect(() => {
    catalogueService.getAll().then(initialCatalogue => {
      setCatalogue(initialCatalogue)
    })
  }, [])

  return (
    <Router>
      <div>
        {catalogue.length > 0 ? (
          <Library catalogue={catalogue} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Router>
  )
}

export default App
