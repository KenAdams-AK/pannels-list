import { useContext } from "react";
import PanelsList from "../components/PanelsList";
import { FavPanelsContext } from "../context/panelsContext";

export default function FavPanels() {
	const { favPanels } = useContext(FavPanelsContext);

	return (
		<div className="FavPanels__container container">
			<h1 className="FavPanels__title title">Favourites Panels</h1>
			<PanelsList panels={favPanels} />
		</div>
	);
}
