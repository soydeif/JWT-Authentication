import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-an-adult-tabby-cat-png-image_2664939.jpg" />
				</div>
				<div className="col">
					<div className="container pt-5">
						<Link to="/login">
							<button type="button" className="btn btn-warning btn-lg btn-block m-2">
								Entrar
							</button>
						</Link>
						<Link to="/signup">
							<button type="button" className="btn btn-secondary btn-lg btn-block m-2">
								Registrate
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
