import * as React from 'react'
// import { Link } from 'react-router-dom'

export default function FirstPage(props) {
  return (<div>
    <h1>Game Page Component is loaded </h1>
    <h1>{props.newWord}</h1>
  </div>)
}

