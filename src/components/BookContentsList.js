import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useRouteMatch } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons/'

const BookContentsList = ({ part }) => {
  const { url } = useRouteMatch()

  return (
    <List component="nav" aria-labelledby="table-of-contents">
      {part.sections.map(section => (
        <ListItem
          key={section.id}
          component={RouterLink}
          to={`${url}/${part.id}/${section.id}`}
          button
          divider
        >
          <ListItemText primary={section.title} />
          <NavigateNextIcon />
        </ListItem>
      ))}
    </List>
  )
}

BookContentsList.propTypes = {
  part: PropTypes.shape({
    id: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
}

export default BookContentsList
