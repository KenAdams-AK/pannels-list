import { IPanel } from "../models/response.data.type";

type PanelProps = {
	panel: IPanel;
};

export default function Panel({ panel }: PanelProps) {
	return (
		<>
			<Panel.Title panel={panel} />
			<Panel.Category panel={panel} />
			<Panel.Intro panel={panel} />
			<Panel.Details panel={panel} />
		</>
	);
}

Panel.Title = function PanelTitle({ panel }: PanelProps) {
	return <h2 className="Panel__title">{panel.title}</h2>;
};

Panel.Category = function PanelCategory({ panel }: PanelProps) {
	return <div className="Panel__category">Catedory: {panel.category}.</div>;
};

Panel.Intro = function PanelCategory({ panel }: PanelProps) {
	return <div className="Panel__intro">{panel.intro}.</div>;
};

Panel.Details = function PanelDetails({ panel }: PanelProps) {
	return (
		<div className="Panel__details">
			<ul>
				{panel.details.map((detail) => (
					<li key={detail}>{detail}</li>
				))}
			</ul>
		</div>
	);
};
