import React from 'react'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import NoBookMatch from './NoBookMatch'
import BookPartSection from './BookPartSection'

const BookPart = () => {
  const { url } = useRouteMatch()
  const { partId } = useParams()

  return (
    <div>
      <Switch>
        <Route path={`${url}/:sectionId`}>
          <BookPartSection partId={partId} />
        </Route>
        <Route>
          <NoBookMatch />
        </Route>
      </Switch>
    </div>
  )
}

export default BookPart
