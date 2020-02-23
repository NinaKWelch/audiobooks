import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import catalogueReducer from './reducers/catalogueReducer'
import bookReducer from './reducers/bookReducer'
import trackReducer from './reducers/trackReducer'

const reducer = combineReducers({
  catalogue: catalogueReducer,
  book: bookReducer,
  track: trackReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
