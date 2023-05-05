import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function Balance() {
	const { transactions } = useContext(GlobalContext);
	const [total, setTotal] = useState(0);
	const [sign, setSign] = useState("+");

	const getBalance = (transactions) => {
		let amt = 0;
		transactions.forEach((item) => (amt += item.amount));
		setTotal(amt);
	};

	useEffect(() => {
		getBalance(transactions);
		setSign(total > 0 ? "+" : total < 0 ? "-" : "");
	}, [transactions, total]);

	return (
		<>
			<div className="rounded-md p-2 my-5">
				<div className="text-sm">BALANCE</div>
				<div
					className={`text-2xl font-bold ${
						total <= 0
							? "text-red-700"
							: total <= 50
							? "text-black"
							: total <= 100
							? "text-yellow-600"
							: "text-green-600"
					}`}
				>
					{sign}${Math.abs(total)}
				</div>
			</div>
		</>
	);
}

export default Balance;
