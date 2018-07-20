import { SET_PHOTOS } from '../actions/games'

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_PHOTOS:
            return [
                action.payload
            ]
        default:
            return state
    }
}