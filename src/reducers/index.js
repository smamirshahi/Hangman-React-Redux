import { combineReducers } from 'redux'
import newWord from './newWord'
import newLetter from './newLetter'

export default combineReducers({
   newWord,
   newLetter
})
