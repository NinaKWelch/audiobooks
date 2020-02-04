import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Books from './Books'
import Book from './Book'

const AudioBooks = ({ books }) => {
  const bookById = id => {
    // eslint-disable-next-line eqeqeq
    return books.find(b => b.id == id)
  }

  return (
    <div>
      <Switch>
        <Route
          path="/books/:id"
          render={({ match }) => <Book book={bookById(match.params.id)} />}
        />
        <Route exact path="/books" render={() => <Books books={books} />} />
        <Redirect to="/books" />
      </Switch>
    </div>
  )
}

AudioBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AudioBooks
