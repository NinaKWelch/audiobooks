import bookService from '../services/book'

const bookReducer = (state = {}, action) => {
  // console.log('ACTION:', action)

  switch (action.type) {
    case 'INIT_BOOK':
      return action.data
    default:
      return state
  }
}

export const initializeBook = id => {
  return async dispatch => {
    const book = await bookService.getOne(id)
    dispatch({
      type: 'INIT_BOOK',
      data: book
    })
  }
}

export default bookReducer
