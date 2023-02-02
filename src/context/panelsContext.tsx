import React, { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IPanel } from "../models/response.data.type";

type FavPanelsProviderProps = {
	children: ReactNode;
};

type PanelsContext = {
	favPanels: IPanel[];
	addFavs: (panel: IPanel) => void;
	removeFavs: (panel: IPanel) => void;
};

export const FavPanelsContext = React.createContext({} as PanelsContext);

export function FavPanelsProvider({ children }: FavPanelsProviderProps) {
	const [favPanels, setfavPanels] = useLocalStorage<IPanel[]>("favPanels", []);

	function addFavs(panel: IPanel) {
		setfavPanels((favPanels) => [...favPanels, panel]);
	}

	function removeFavs(panel: IPanel) {
		setfavPanels((favPanels) => {
			return favPanels.filter((fav) => fav.id !== panel.id);
		});
	}

	return (
		<FavPanelsContext.Provider value={{ favPanels, addFavs, removeFavs }}>
			{children}
		</FavPanelsContext.Provider>
	);
}
