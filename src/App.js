import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import bookService from './services/books'
import AudioBooks from './components/AudioBooks'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService.getAll().then(initialBooks => {
      setBooks(initialBooks)
    })
  }, [])

  return (
    <Router>
      <div>
        {books.length > 0 ? (
          <AudioBooks books={books} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Router>
  )
}

export default App
