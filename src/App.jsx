import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./contexts/GlobalState";

function App() {
	return (
		<div className="flex justify-center flex-col max-w-sm mx-auto">
			<h1>DEbug</h1>
			<GlobalProvider>
				<Header />
				<div className="px-5">
					<Balance />
					<IncomeExpense />
					<TransactionList />
					<AddTransaction />
				</div>
			</GlobalProvider>
		</div>
	);
}

export default App;
