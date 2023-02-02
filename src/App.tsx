import { Navigate, Route, Routes } from "react-router-dom";
import { FavPanelsProvider } from "./context/panelsContext";
import FavPanels from "./pages/FavPanels";
import Home from "./pages/Home";

function App() {
	return (
		<FavPanelsProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourites" element={<FavPanels />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</FavPanelsProvider>
	);
}

export default App;
