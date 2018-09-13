import { NEW_GAME } from '../actions/games'

export default (state = [], action = {}) => {
    switch (action.type) {
        case NEW_GAME:
            return (
                JSON.parse(JSON.stringify(action.payload))
            )
        default:
            return state
    }
}