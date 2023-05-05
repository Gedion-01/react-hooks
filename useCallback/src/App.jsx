import React, { useState, useCallback, useEffect } from "react";

function List({ getItems }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
		console.log("Updating items");
	}, [getItems]);

	return items.map(item => <div key={item}>{item}</div>);
}

function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	//
	const getItems = useCallback(() => {
		return [number, number + 1, number + 2]
	}, [number])

	const theme = {
		backgroundColor: dark ? "#333" : "#CCC",
		color: dark ? "#CCC" : "#333",
	};

	return (
		<>
			<div style={theme}>
				<input
					type='number'
					value={number}
					onChange={(e) => setNumber(parseInt(e.target.value))}
				/>
				<button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
			</div>
			<List getItems={getItems} />
		</>
	);
}

export default App;
