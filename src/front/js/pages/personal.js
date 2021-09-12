import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const out = e => {
		e.preventDefault();
		actions.logOut();
		history.push("/");
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"
					/>
				</div>
				<div className="col">
					<div className="container pt-5">
						<h1>
							{store.user.user ? `Bienvenido  ${store.user.user.email}` : ""}
							{!store.user.user ? `Algo ha fallado, vuelve a intentarlo` : ""}
						</h1>
						<button className="btn btn-primary" type="submit" onClick={out}>
							Salir
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
