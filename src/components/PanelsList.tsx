import { IPanel } from "../models/response.data.type";
import PanelItem from "./PanelItem";

type PanelListProps = {
	panels: IPanel[];
};

export default function PanelsList({ panels }: PanelListProps) {
	return (
		<div className="PanelList__container">
			{panels.map((panel) => (
				<PanelItem key={panel.id} panel={panel} />
			))}
		</div>
	);
}
