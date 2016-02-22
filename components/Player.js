import React, { PropTypes } from 'react'
const buttonStyle =  {
  color: 'red',
  paddingLeft: '5px'
  
}

const PlayerButton = ({ onClick, text }) => (
  <a href="#" style={buttonStyle}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      +{text}
    </a>
)

const Player = ({ onScoreClick, onPenaltyClick, player }) => (
  <li>
    #{player.number}  {player.name}  P: {player.points} F: {player.penalties}

    {[1,2,3].map(p => <PlayerButton key={"b-" + p + player.id} onClick={() => onScoreClick(player.id, p)} text={p}/>  )} 
    <PlayerButton key={"p-" + player.id} onClick={() => onPenaltyClick(player.id)} text="P"/>
  </li>
)

Player.propTypes = {
  onScoreClick: PropTypes.func.isRequired,
  onPenaltyClick: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired
  
}

export default Player
