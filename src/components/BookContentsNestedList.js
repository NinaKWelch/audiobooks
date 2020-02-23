import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  NavigateNext as NavigateNextIcon
} from '@material-ui/icons/'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

const BookContentsNestedList = ({ parts }) => {
  const { url } = useRouteMatch()
  const classes = useStyles()
  const [open, setOpen] = useState('')

  return (
    <div>
      <List component="nav" aria-labelledby="table-of-contents">
        {parts.map(part => (
          <div key={part.id}>
            <ListItem onClick={() => setOpen(part.id)} button divider>
              <ListItemText primary={part.title} />
              {open === part.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={open === part.id} timeout="auto" unmountOnExit>
              <List>
                {part.sections.map(section => (
                  <ListItem
                    key={section.id}
                    component={RouterLink}
                    to={`${url}/${part.id}/${section.id}`}
                    className={classes.nested}
                    button
                  >
                    <ListItemText primary={section.title} />
                    <NavigateNextIcon />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  )
}

BookContentsNestedList.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BookContentsNestedList
