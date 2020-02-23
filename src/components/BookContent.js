import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BookContents from './BookContents'
import BookPart from './BookPart'

const BookContent = ({ book }) => {
  const { url } = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route exact path={url}>
          <BookContents book={book} />
        </Route>
        <Route path={`${url}/:partId`}>
          <BookPart />
        </Route>
      </Switch>
    </div>
  )
}

BookContent.propTypes = {
  book: PropTypes.shape().isRequired
}

export default BookContent
