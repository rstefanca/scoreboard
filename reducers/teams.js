const player = (state, action) => {
	switch(action.type) {
		case 'SCORE':
			if (state.id !== action.playerId) {
				return state;
			}

			return Object.assign({}, state, {
				points: state.points + action.points
			})

		case 'PENALTY': 
			if (state.id !== action.playerId) {
				return state;
			}

			return Object.assign({}, state, {
				penalties: state.penalties + 1
			})

		default:
			return state

	}
}

const players = (state, action) => {
	switch(action.type) {
		case 'PENALTY':
		case 'SCORE':
			return state.map(p => player(p, action))
		default:
			return state	
	}
}

const team = (state, action) => {
	switch(action.type) {
		case 'PENALTY':
		case 'SCORE':
			return Object.assign({}, state, {
				players: players(state.players, action)
			})
		default:
			return state	
	}
}

export const hosts = (state = {players: []}, action) => {
	switch(action.type) {
		case 'START_GAME':
			return action.teams[1]

		default:
			return team(state, action)
	}
}

export const guests = (state = { players: [] }, action) => {
	switch(action.type) {
		case 'START_GAME':
			return action.teams[0]
			
		default:
			return team(state, action)	
	}
}

