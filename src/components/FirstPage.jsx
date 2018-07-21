import * as React from 'react'
import { Link } from 'react-router-dom'

export default function FirstPage() {
  return (<div>
    <h1>WELCOME TO </h1>
    <h1>The HANGMAN GAME </h1>

    <Link to={`/hangman`}>Start Playing</Link>
  </div>)
}

