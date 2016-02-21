import { connect } from 'react-redux'
import { playerScored, playerPenalty } from '../actions'
import Roster from '../components/Roster'


const mapStateToProps = (state) => {
	return {
		guests: state.guests.players,
		hosts: state.hosts.players,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onScoreClick: (id, points) => {
			dispatch(playerScored(id, points))
		},
		onPenaltyClick: (id) => {
			dispatch(playerPenalty(id))
		}
	}
}

const TeamRoasters = connect(mapStateToProps, mapDispatchToProps)(Roster)

export default TeamRoasters