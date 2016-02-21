import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import scoreboardApp from './reducers'
import App from './components/App'

let store = createStore(scoreboardApp)

const teamA = { id: "TeamA", players: [{ id: 1, number: 3, name: "Player A1", points: 0, penalties: 0}, { id: 3, number: 7, name: "Player A1", points: 0, penalties: 0}]}
const teamB = { id: "TeamB", players: [{ id: 2, number: 53, name: "Player B1", points: 2, penalties: 0}]}

store.dispatch({type: 'START_GAME', teams: [teamA, teamB]})


render(
	<Provider store={store}>
		<App/>	
	</Provider>, 
	document.getElementById('root')
	)


