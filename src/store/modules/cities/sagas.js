import {
	all, takeLatest, call, put,
} from 'redux-saga/effects';

import { apiLocation, apiSocialProgram } from '../../../services/api';

import * as CitiesActions from './actions';
import { formatMonth } from '../../../util/format';

function* loadCitiesRequest(action) {
	try {
		const response = yield call(
			apiLocation.get,
			`/localidades/estados/${action.payload.UFCode}/municipios`,
		);

		yield put(CitiesActions.loadCitiesSuccess(response.data));
	} catch (error) {
		yield put(CitiesActions.loadCitiesFailure());
	}
}

function fetchTwelveMonthsFormattedForRequest() {
	const monthClosed = new Date(new Date().setMonth(new Date().getMonth() - 1))
	const twelveMonthsAgo = new Date(new Date().setMonth(monthClosed.getMonth() - 11));

	let monthsOfYear = [];
	for (let d = twelveMonthsAgo; d <= monthClosed; d.setMonth(d.getMonth() + 1)) {
		monthsOfYear.push(`${new Date(d).getFullYear()}${formatMonth(new Date(d))}`);
	}

	return monthsOfYear;
}

function* fetchDataProgramToChat(monthYear, idCity) {
	try {
		const response = yield call(
			apiSocialProgram.get,
			`/bolsa-familia-por-municipio?mesAno=${monthYear}&codigoIbge=${idCity}&pagina=1`,
		);

		const {
			id,
			dataReferencia,
			valor,
			quantidadeBeneficiados,
		} = response.data[0];

		return yield {
			id,
			referenceDate: dataReferencia,
			total: valor,
			amountBeneficiaries: quantidadeBeneficiados,
		}
	} catch (error) {
		yield put(CitiesActions.loadCitiesFailure());
	}
}

function* loadDataProgramRequest(action) {
	try {
		const twelveMonthsAgoFormmated = yield fetchTwelveMonthsFormattedForRequest();

		const idCity = action.payload.idCity
		const data = yield all(twelveMonthsAgoFormmated.map(monthYear => call(fetchDataProgramToChat, monthYear, idCity)));

		yield put(CitiesActions.loadDataProgramSuccess(data));
	} catch (error) {
		yield put(CitiesActions.loadDataProgramFailure("Error ao carregar os dados"));
	}
}

export default all([
	takeLatest('@cities/LOAD_REQUEST', loadCitiesRequest),
	takeLatest('@cities/LOAD_DATA_PROGRAM_REQUEST', loadDataProgramRequest),
]);
