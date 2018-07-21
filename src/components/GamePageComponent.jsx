import * as React from 'react'
import { connect } from 'react-redux'
// import { addAlbum, getAlbums } from '../actions/albums'
import GamePage from './GamePage'
import * as gameFunctions from '../lib/game'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

export default class GamePageComponent extends React.PureComponent {

    // componentDidMount() {

    // }

    render() {
        return (<div>
            {console.log(gameFunctions.randomWord())}
            </div>
        )

        // if (!this.props.albums) return 'Loading...'
        // return <GamePage albums={this.props.albums} />
    }
}

// const mapStateToProps = (state) => {
//     return {
//         albums: state.albums
//     }
// }

// export default connect(mapStateToProps, { addAlbum, getAlbums })(GamePageComponent)
// export default connect(mapStateToProps)(GamePageComponent)
