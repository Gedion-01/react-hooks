import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();
	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
	};
	return (
		<>
			<button onClick={toggleTheme}>Toogle Theme</button>
			<div style={themeStyles}>Function Theme</div>
		</>
	);
}
