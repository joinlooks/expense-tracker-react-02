import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../contexts/GlobalState";

function TransactionList() {
	const { transactions, clearHistory } = useContext(GlobalContext);

	return (
		<div className="my-5">
			<div className="flex justify-between">
				<h3 className="text-xl">History</h3>
				<button onClick={clearHistory} className="text-blue-800 underline">
					Clear History
				</button>
			</div>
			<hr className="my-3" />
			{transactions.length !== 0 ? (
				transactions.map((item) => {
					return <Transaction key={item.id} transaction={item} />;
				})
			) : (
				<div className="text-center">No transactions yet</div>
			)}
		</div>
	);
}

export default TransactionList;
