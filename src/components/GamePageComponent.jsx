import * as React from 'react'
import { connect } from 'react-redux'
// import { addAlbum, getAlbums } from '../actions/albums'
import GamePage from './GamePage'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class GamePageComponent extends React.PureComponent {

    componentDidMount() {

        // this.props.getAlbums()

    //     request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => this.props.setAlbums(response.body))

    //     sleep(2000)
    //   .then(message => this.props.setAlbums([
    //     {
    //       id: 1,
    //       title: message
    //     },
    //     {
    //       id: 2,
    //       title: 'This is the second album'
    //     },
    //     {
    //       id: 3,
    //       title: 'The last album'
    //     }
    //   ]))

        // this.props.addAlbum(5, 'Enjoying sunshine')
        // this.props.addAlbum(10, 'Having fun in the US')

    }

    render() {
        if (!this.props.albums) return 'Loading...'
        return <GamePage albums={this.props.albums} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

// export default connect(mapStateToProps, { addAlbum, getAlbums })(GamePageComponent)
export default connect(mapStateToProps)(GamePageComponent)
