import { MAKE_GUESS } from '../actions/games'

export default (state = [], action = {}) => {
    switch (action.type) {
        case MAKE_GUESS:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}