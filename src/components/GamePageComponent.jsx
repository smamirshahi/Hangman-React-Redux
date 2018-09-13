import * as React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/games'
import GamePage from './GamePage'
import * as gameFunctions from '../lib/game'

class GamePageComponent extends React.PureComponent {

    componentDidMount() {
        this.props.newGame(gameFunctions.randomWord())
    }

    render() {
        if (this.props.newWord.length === 0) return 'Loading...'
        return <GamePage newWord={this.props.newWord} showGuess={gameFunctions.showGuess}
            wrongGuessCount={gameFunctions.wrongGuessCount} wrongGuessLimit={gameFunctions.wrongGuessLimit}
            isWinner={gameFunctions.isWinner} randomWord={gameFunctions.randomWord} />
    }
}

const mapStateToProps = (state) => {
    return {
        newWord: state.newWord, // for the first time this is equal to the initial state defined in ./reducers/newWord
        newLetter: state.newLetter
    }
}

export default connect(mapStateToProps, { newGame })(GamePageComponent)