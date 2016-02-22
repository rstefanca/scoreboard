import { connect } from 'react-redux'
import Penalties from '../components/Penalties'

const getPenaltyForTeam = (team) => {
	if (team === undefined) {
		return 0;
	}
	
	let total = 0
	for(var i = 0; i < team.players.length; i++) {
		total = total + team.players[i].penalties
	}
	
	return total > 5 ? 5 : total
}

const mapStateToProps = (state) => {
	return {
		penaltyHosts: getPenaltyForTeam(state.guests),
		penaltyGuests: getPenaltyForTeam(state.hosts)
	}
}

const CurrentPenalties = connect(mapStateToProps)(Penalties)

export default CurrentPenalties