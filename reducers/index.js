import { combineReducers } from 'redux'
import { guests, hosts } from './teams'

/*
const scoreboardApp = (state = [], action) => {
	switch(action.type) {
		case 'START_GAME':
			return {
				guests: action.teams[0],
				hosts: action.teams[1]
			}

		default:
			return state
	}
}
*/

const scoreboardApp = combineReducers({
	guests,
	hosts
})

export default scoreboardApp