import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function Transaction({ transaction }) {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount >= 0 ? "+" : "-";

	return (
		<div
			className={`flex justify-between px-3 py-2 m-2 rounded-md shadow-sm ${
				sign === "-"
					? "bg-red-50 hover:bg-red-100 focus:bg-red-100"
					: "bg-green-50 hover:bg-green-100 focus:bg-green-100"
			}`}
		>
			<div>{transaction.text}</div>
			<div className={sign === "-" ? "text-red-950" : "text-green-950"}>
				{sign} ${Math.abs(transaction.amount)}
				<span className="ml-2">
					<button
						className="text-red-700"
						onClick={() => deleteTransaction(transaction.id)}
					>
						✘
					</button>
				</span>
			</div>
		</div>
	);
}

export default Transaction;
