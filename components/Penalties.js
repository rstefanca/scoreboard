import React, { PropTypes } from 'react'

const Penalties = ({ penaltyHosts, penaltyGuests }) => {
	return (
		<div>
			<span>{penaltyGuests}</span>:<span>{penaltyHosts}</span>
		</div>
		)
}

Penalties.propTypes = {
	penaltyHosts: PropTypes.number.isRequired,
	penaltyGuests: PropTypes.number.isRequired
}

export default Penalties