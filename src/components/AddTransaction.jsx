import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function AddTransaction() {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState("");

	const { addTransaction } = useContext(GlobalContext);

	const submitHandler = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount,
		};

		addTransaction(newTransaction);
		setText("");
		setAmount("");
	};

	return (
		<div className="mt-5">
			<h3 className="text-xl">Add New Transaction</h3>
			<hr className="my-3" />
			<form onSubmit={submitHandler}>
				<div className="my-1 mx-5 flex flex-col">
					<label htmlFor="text">Item</label>
					<input
						id="text"
						name="text"
						type="text"
						className="border rounded-md mt-1 text-center p-1"
						placeholder="Enter name of item"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="my-2 mx-5 flex flex-col">
					<label htmlFor="amount">
						Amount &nbsp;
						<span className="font-mono text-xs text-gray-800 mb-1">
							'-' expense, '+' income
						</span>
					</label>
					<input
						id="amount"
						name="amount"
						type="number"
						className="border rounded-md mt-1 text-center p-1"
						placeholder="Enter expense/income amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<div className="mx-5 my-5">
					<button
						className="bg-blue-800 px-3 py-1 w-full rounded-md text-white"
						type="submit"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddTransaction;
