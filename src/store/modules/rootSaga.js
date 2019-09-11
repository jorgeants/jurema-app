import { all } from 'redux-saga/effects';

import states from './states/sagas';

export default function* rootSaga() {
	return yield all([
		states
	]);
}
