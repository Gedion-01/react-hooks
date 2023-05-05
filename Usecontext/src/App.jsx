import React, { useState, useEffect } from "react";

import { ThemeProvider } from "./ThemeContext";
import FunctionContextComponent from "./FunctionContextComponent";

function App() {
	return (
		<>
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</>
	);
}

export default App;
