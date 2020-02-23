import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import TopBar from './TopBar'

const NoBookMatch = () => {
  const { url } = useRouteMatch()

  return (
    <Route exact path={url}>
      <div>
        <TopBar />
        <div>{/* add error handling */}</div>
      </div>
    </Route>
  )
}

export default NoBookMatch
