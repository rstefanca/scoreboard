export const game = (state = [], action) => {
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