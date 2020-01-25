import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import bookService from './services/books'
import Book from './components/Book'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService.getAll().then(initialBooks => {
      setBooks(initialBooks)
    })
  }, [])

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="h1" color="inherit">
            Audiobooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div>
        <Container maxWidth="lg" component="main">
          {books.map(b => (
            <div key={b.id}>
              <Book book={b} />
            </div>
          ))}
        </Container>
      </div>

      <Container component="footer">
        <Typography variant="body2">
          Copyrignt &copy; 2020 <strong>Nina Welch</strong>
        </Typography>
      </Container>
    </div>
  )
}

export default App
