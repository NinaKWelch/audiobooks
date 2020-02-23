import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Books from './Books'
import Book from './Book'

const Library = () => {
  return (
    <div>
      <Switch>
        <Route path="/books/:bookId">
          <Book />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Redirect to="/books" />
      </Switch>
    </div>
  )
}

export default Library
