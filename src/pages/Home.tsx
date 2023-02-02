import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PanelsList from "../components/PanelsList";
import { FavPanelsContext } from "../context/panelsContext";
import { IPanel, IPanels } from "../models/response.data.type";

export default function Home() {
	const { favPanels } = useContext(FavPanelsContext);

	const [panels, setPanels] = useState<IPanel[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		setError("");
		setIsLoading(true);
		try {
			const { data }: IPanels = await axios.get("http://localhost:4000/panels");
			setPanels(() => {
				// Merging fetched data with data from LocalStorage
				let count = favPanels.length;
				for (let i = 0; i < data.length; i++) {
					if (count === 0) break;
					const currentFav = favPanels.find((fav) => fav.id === data[i].id);
					if (currentFav) {
						data[i] = currentFav;
						count -= 1;
					}
				}
				return data;
			});
		} catch (error) {
			// Handling "Object is of type 'unknown'" Error in TypeScript
			if (error instanceof AxiosError) {
				setError(error.message);
			} else {
				setError("Oops... Something went wrong.");
				console.error("Unexpected error: ", error);
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="Home__container container">
			<h1 className="Home__title title">Amdocs panels</h1>
			{favPanels.length > 0 && (
				<Link to="/favourites">
					<button>
						Favourites
						<span>{favPanels.length}</span>
					</button>
				</Link>
			)}
			{error && <div className="Home__error error">{error}</div>}
			{isLoading ? (
				<div className="Home__loader">Loading...</div>
			) : (
				<PanelsList panels={panels} />
			)}
		</div>
	);
}
