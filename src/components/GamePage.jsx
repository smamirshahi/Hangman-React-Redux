import * as React from 'react'
import { newGame, makeGuess } from '../actions/games'
import { connect } from 'react-redux'

class GamePage extends React.PureComponent {
  defaultValue = ''

  handleChange = (event) => {
    const value = event.target.value;
    this.defaultValue = value;
    this.setState({
      letter: value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeGuess(this.state.letter)
    this.defaultValue = ''
  }

  render() {
    let text = ''
    if (this.props.wrongGuessLimit(this.props.newWord, this.props.newLetter)) {
      text = 'The Game is finished. You LOST!'
    }
    if (this.props.isWinner(this.props.newWord, this.props.newLetter)) {
      text = 'The Game is finished. You WON!'
    }

    return (<div>
      <h1>Type a letter in the field. You can make six mistakes</h1>
      <h1> The word has {this.props.newWord.length} letters </h1>
      <h1>{this.props.showGuess(this.props.newWord, this.props.newLetter)}</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Letter:
          <input type="text" name="letter" onChange={this.handleChange} maxLength="1" value={this.defaultValue} />
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

export default connect(mapStateToProps, { newGame, makeGuess })(GamePage)