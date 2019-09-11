import {
	all, takeLatest, call, put,
} from 'redux-saga/effects';

import { apiLocation, apiSocialProgram } from '../../../services/api';

import * as StatesActions from './actions';
// import { formatDate, hour, minutes } from '../../../util/format';

function* loadStatesRequest() {
	try {
		const response = yield call(
			apiLocation.get,
			'/localidades/estados',
		);

		console.tron.log(response);

		yield put(StatesActions.loadStatesSuccess(response.data));
	} catch (error) {
		yield put(StatesActions.loadStatesFailure());
	}
}

export default all([
	takeLatest('@states/LOAD_REQUEST', loadStatesRequest),
]);
