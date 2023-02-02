import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
};

export default function Modal({ children, open, onClose }: ModalProps) {
	if (!open) return null;

	return ReactDOM.createPortal(
		<>
			<div className="Modal__overlay" onClick={onClose}>
				<div className="Modal__body" onClick={(e) => e.stopPropagation()}>
					<button onClick={onClose}>&times;</button>
					{children}
				</div>
			</div>
		</>,
		document.querySelector("#modal-root") as HTMLDivElement
	);
}
