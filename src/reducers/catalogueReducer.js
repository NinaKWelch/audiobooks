import catalogueService from '../services/catalogue'

const catalogueReducer = (state = [], action) => {
  // console.log('ACTION:', action)

  switch (action.type) {
    case 'INIT_CATALOGUE':
      return action.data
    default:
      return state
  }
}

export const initializeCatalogue = () => {
  return async dispatch => {
    const catalogue = await catalogueService.getAll()
    dispatch({
      type: 'INIT_CATALOGUE',
      data: catalogue
    })
  }
}

export default catalogueReducer
