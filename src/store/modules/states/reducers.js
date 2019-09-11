const INITIAL_STATE = {
	data: [],
	error: false,
	errorMessage: null,
	success: false,
	successMessage: null,
	loading: false,
	searchTerm: null,
};

export default function session(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@restaurants/LOAD_REQUEST':
			return { ...state, loading: true };
		case '@restaurants/LOAD_SUCCESS':
			return {
				...state,
				data: action.payload.data,
				error: false,
				errorMessage: null,
				loading: false,
			};
		case '@restaurants/LOAD_FAILURE':
			return {
				...state,
				error: true,
				errorMessage: action.payload.errorMessage,
				loading: false,
			};
		default:
			return state;
	}
}
