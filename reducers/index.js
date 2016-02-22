import { combineReducers } from 'redux'
import { guests, hosts } from './teams'

const scoreboardApp = combineReducers({
	guests,
	hosts
})

export default scoreboardApp