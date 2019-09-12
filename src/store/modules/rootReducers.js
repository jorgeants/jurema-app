import { combineReducers } from 'redux'

import states from './states/reducers'
import cities from './cities/reducers'

export default combineReducers({
	states,
	cities,
})
