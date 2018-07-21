import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/games'
import GamePage from './GamePage'
import * as gameFunctions from '../lib/game'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class GamePageComponent extends React.PureComponent {

    componentDidMount() {
        this.props.newGame(gameFunctions.randomWord())
        this.render()
    }

    render() {
        if (this.props.newWord.length === 0) return 'Loading...'
        return <GamePage newWord = {this.props.newWord} showGuess = {gameFunctions.showGuess}/>
    }



    // return (<div> {         
    //     this.props.newGame(gameFunctions.randomWord())
    //     }
    //     </div>
    // )

    // if (!this.props.albums) return 'Loading...'
    // return 
    // return <GamePage albums={this.props.albums} />
}

const mapStateToProps = (state) => {
    return {
        newWord: state.newWord,
        newLetter: state.newLetter
    }
}

export default connect(mapStateToProps, { newGame })(GamePageComponent)
// export default connect(mapStateToProps)(GamePageComponent)
