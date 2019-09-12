import { all } from 'redux-saga/effects';

import states from './states/sagas';
import cities from './cities/sagas';

export default function* rootSaga() {
	return yield all([
		states,
		cities
	]);
}
