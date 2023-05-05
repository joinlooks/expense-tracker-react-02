import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
	transactions: [],
};
const GlobalContext = createContext(initialState);

// Provider component
const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	function clearHistory() {
		dispatch({
			type: "CLEAR_HISTORY",
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
				clearHistory,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export { GlobalContext, GlobalProvider };
