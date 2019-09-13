const INITIAL_STATE = {
	data: [],
	UFCode: null,
	idCity: null,
	error: false,
	errorMessage: null,
	success: false,
	successMessage: null,
	loading: false,
	dataProgram: [],
};

export default function cities(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@cities/LOAD_REQUEST':
			return {
				...state,
				UFCode: action.payload.UFCode,
				loading: true
			};
		case '@cities/LOAD_SUCCESS':
			return {
				...state,
				data: action.payload.data,
				error: false,
				errorMessage: null,
				loading: false,
			};
		case '@cities/LOAD_FAILURE':
			return {
				...state,
				error: true,
				errorMessage: action.payload.errorMessage,
				loading: false,
			};
		case '@cities/LOAD_DATA_PROGRAM_REQUEST':
			return {
				...state,
				idCity: action.payload.idCity,
			}
		case '@cities/LOAD_DATA_PROGRAM_SUCCESS':
			return {
				...state,
				dataProgram: action.payload.dataProgram,
			}

		default:
			return state;
	}
}
