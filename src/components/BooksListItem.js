import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  cover: {
    width: '100%',
    height: 'auto'
  }
})

const BooksListItem = ({ book }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        component={RouterLink}
        to={`/books/${book.id}`}
        className={classes.root}
      >
        <Grid item xs={3} sm={4} md={3}>
          <img
            src={book.thumbnail}
            alt="book cover"
            className={classes.cover}
          />
        </Grid>
        <Grid item xs={9} sm={8} md={9}>
          <Typography variant="h5">{book.title}</Typography>

          {book.authors.map(author => (
            <Typography
              key={author.id}
              variant="subtitle1"
              color="textSecondary"
            >
              {author.name} {author.initials} {author.surname}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

BooksListItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        initials: PropTypes.string,
        surname: PropTypes.string
      })
    )
  })
}

BooksListItem.defaultProps = {
  book: PropTypes.shape({
    thumbnail: 'https://via.placeholder.com/220',
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        initials: '',
        surname: ''
      })
    )
  })
}

export default BooksListItem
