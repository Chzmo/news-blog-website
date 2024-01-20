import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</>
	);
}

export default App;
