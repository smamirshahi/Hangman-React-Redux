import { createStore } from 'redux'
import reducer from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //the devtool redux is not working by default. you need to add it

const store = createStore(reducer, enhancer) // make a store

export default store