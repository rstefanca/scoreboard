import React, { PropTypes } from 'react'

const Score = ({ pointsHosts, pointsGuests }) => {
	return (
		<div>
			<span>{pointsHosts}</span>:<span>{pointsGuests}</span>
		</div>
		)
}

Score.propTypes = {
	pointsHosts: PropTypes.number.isRequired,
	pointsGuests: PropTypes.number.isRequired
}

export default Score