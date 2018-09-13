import { combineReducers } from 'redux'
import newWord from './newWord'
import newLetter from './newLetter'

export default combineReducers({
    newWord, // this is equal to newWord: newWord
    newLetter
})
