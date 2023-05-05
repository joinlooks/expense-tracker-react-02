import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function IncomeExpense() {
	const { transactions } = useContext(GlobalContext);
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);

	const getIncomeExpense = (transactions) => {
		let inc = 0;
		let exp = 0;
		transactions.forEach((item) => {
			item.amount > 0 ? (inc += item.amount) : (exp += item.amount);
		});
		setIncome(inc);
		setExpense(exp);
	};

	useEffect(() => {
		getIncomeExpense(transactions);
	}, [transactions]);

	return (
		<>
			<div className="flex justify-around border p-4 rounded-md shadow-sm">
				<div className="text-center">
					<div>INCOME</div>
					<div className="text-xl font-bold text-green-600">
						${Math.abs(income)}
					</div>
				</div>
				<div className="text-center">
					<div>EXPENSE</div>
					<div className="text-xl font-bold text-red-500">
						${Math.abs(expense)}
					</div>
				</div>
			</div>
		</>
	);
}

export default IncomeExpense;
