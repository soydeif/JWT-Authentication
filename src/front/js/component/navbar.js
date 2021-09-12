import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const out = e => {
		e.preventDefault();
		actions.log_out();
		history.push("/");
	};
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://img2.freepng.es/20171203/ca8/kitten-free-png-image-5a24ac6d7e8ea9.6762057115123528775184.jpg"
						style={{ width: "100px" }}
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/signup">
					<button className="btn btn-primary m-1">Registrar</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-warning m-1">Login</button>
				</Link>
				<button className="btn btn-primary" type="submit" onClick={out}>
					Salir
				</button>
			</div>
		</nav>
	);
};
