export const playerScored = (playerId, points) => {
	return {
		type: 'SCORE',
		playerId: playerId,
		points: points
	}
}

export const playerPenalty = (playerId) => {
	console.log("penalty: " + playerId)
	return {
		type: 'PENALTY',
		playerId: playerId
	}
}