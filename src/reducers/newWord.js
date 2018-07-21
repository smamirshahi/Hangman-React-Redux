import { NEW_GAME } from '../actions/games'

export default (state = [], action = {}) => {
    switch (action.type) {
        case NEW_GAME:
            return (
                action.payload
            )
        default:
            return state
    }
}