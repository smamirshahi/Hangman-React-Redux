import * as React from 'react'
// import { Link } from 'react-router-dom'
import * as gameFunctions from '../lib/game'
import { newGame, makeGuess } from '../actions/games'
import { connect } from 'react-redux'

class GamePage extends React.PureComponent {

  defaultValue = ''

  handleChange = (event) => {
    const value = event.target.value;
    this.defaultValue = value;
    this.setState({
      name: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeGuess(this.state.name)
    this.defaultValue = ''
    // console.log(this.props.newWord)
    // console.log(this.state.name)
    // console.log(this.props.showGuess(this.props.newWord, this.state.name))
  }

  render() {
    return (<div>
      <h1>Game Page Component is loaded </h1>
      <h1>{this.props.newWord}</h1>
      <h1>{this.props.showGuess(this.props.newWord, this.props.newLetter)}</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Letter:
          <input type="text" name="letter" onChange={this.handleChange} maxLength="1" value = {this.defaultValue} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
      newLetter: state.newLetter
  }
}

export default connect(mapStateToProps, { makeGuess })(GamePage)

