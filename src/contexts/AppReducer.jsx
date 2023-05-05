function AppReducer(state, action) {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};

		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};

		case "CLEAR_HISTORY":
			return {
				...state,
				transactions: [],
			};

		default:
			return state;
	}
}

export default AppReducer;
