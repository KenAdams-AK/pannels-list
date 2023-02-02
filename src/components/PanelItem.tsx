import { useContext, useState } from "react";
import { FavPanelsContext } from "../context/panelsContext";
import { IPanel } from "../models/response.data.type";
import Modal from "./Modal";
import Panel from "./Panel";

type PanelItemProps = {
	panel: IPanel;
};

export default function PanelItem({ panel }: PanelItemProps) {
	const [isOpen, setIsOpen] = useState(false);
	const { addFavs, removeFavs } = useContext(FavPanelsContext);

	return (
		<>
			<div className="PanelItem__container">
				<Panel.Title panel={panel} />
				<Panel.Category panel={panel} />
				<Panel.Intro panel={panel} />
				<div className="PanelItem__buttons">
					<button type="button" onClick={() => setIsOpen(true)}>
						More
					</button>
					<button
						type="button"
						onClick={
							!panel.isFav
								? () => {
										addFavs(panel);
										panel["isFav"] = true;
								  }
								: () => {
										removeFavs(panel);
										panel["isFav"] = false;
								  }
						}
					>
						{panel.isFav ? "Remove" : "Add"}
					</button>
				</div>
			</div>

			{isOpen && (
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<Panel panel={panel} />
				</Modal>
			)}
		</>
	);
}
