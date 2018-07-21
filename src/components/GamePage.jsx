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
    var text = ''
    if (this.props.wrongGuessLimit(this.props.newWord, this.props.newLetter)) {
      text = 'The Game is finished. You lost'
    }
    if (this.props.isWinner(this.props.newWord, this.props.newLetter)) {
      text = 'The Game is finished. You won'
    }

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

      <h1>You have guessed {this.props.wrongGuessCount(this.props.newWord, this.props.newLetter)} wrong letters</h1>
      <h1>{text}</h1>

      <p><button>New Game</button></p>
      
      

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
      newLetter: state.newLetter
  }
}

export default connect(mapStateToProps, { makeGuess })(GamePage)

