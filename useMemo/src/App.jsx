import React, { useState, useMemo, useEffect } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	//
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	// referential equality to return the same object which is cached
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? "#333" : "#CCC",
			color: dark ? "#CCC" : "#333",
		};
	}, [dark]);

	useEffect(() => {
		console.log("Theme Changed");
	}, [themeStyles]);

	return (
		<>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);
}

function slowFunction(num) {
	console.log("Calling slow Function");
	for (let i = 0; i <= 1000000000; i++) {}
	return num * 2;
}

export default App;
