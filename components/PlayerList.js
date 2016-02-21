import React, { PropTypes } from 'react'
import Player from './Player'

const PlayerList = ( { players, onScoreClick, onPenaltyClick } ) => (
	<ul>
		{ players.map(p =>
			<Player
				key={p.id}
				player={p}
				onScoreClick={onScoreClick}
				onPenaltyClick={onPenaltyClick}
			/>
		)}
	</ul>
)

PlayerList.propTypes = {
	players: PropTypes.array.isRequired,
	onScoreClick: PropTypes.func.isRequired,
	onPenaltyClick: PropTypes.func.isRequired
}


export default PlayerList