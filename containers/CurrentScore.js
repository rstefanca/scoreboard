import { connect } from 'react-redux'
import Score from '../components/Score'

const getCurrentScoreForTeam = (team) => {
	if (team === undefined) {
		return 0;
	}
	
	let total = 0
	for(var i = 0; i < team.players.length; i++) {
		total = total + team.players[i].points
	}
	
	return total
}

const mapStateToProps = (state) => {
	return {
		pointsHosts: getCurrentScoreForTeam(state.guests),
		pointsGuests: getCurrentScoreForTeam(state.hosts)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const CurrentScore = connect(mapStateToProps, mapDispatchToProps)(Score)

export default CurrentScore