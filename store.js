import { createStore, combineReducers, applyMiddleware } from 'redux'

import fitnessReducer from './reducers'

const reducer = combineReducers ({ fitnessReducer })

const store = createStore(
    reducer,
    applyMiddleware()
)

export default store