import * as React from 'react'
// import { Link } from 'react-router-dom'
import * as gameFunctions from '../lib/game'

export default function FirstPage(props) {
  return (<div>
    <h1>Game Page Component is loaded </h1>
    <h1>{props.newWord}</h1>
    <h1>{props.showGuess(props.newWord, '')}</h1>
    

  </div>)
}

