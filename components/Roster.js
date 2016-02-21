import React, { PropTypes } from 'react'
import PlayerList from './PlayerList'

const Roster = ( { guests, hosts, onScoreClick, onPenaltyClick } ) => (
	<div>
		<PlayerList players={guests} onScoreClick={onScoreClick} onPenaltyClick={onPenaltyClick}/>
		<PlayerList players={hosts} onScoreClick={onScoreClick} onPenaltyClick={onPenaltyClick}/>
	</div>
)

Roster.propTypes = {
	guests: PropTypes.array.isRequired,
	hosts: PropTypes.array.isRequired,
	onScoreClick: PropTypes.func.isRequired,
	onPenaltyClick: PropTypes.func.isRequired
}


export default Roster