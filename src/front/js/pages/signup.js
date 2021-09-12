import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	let history = useHistory();

	const firstValue = {
		name: "",
		lastName: "",
		email: "",
		password: "",
		city: "",
		phoneNumber: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		actions.register(loginValue);
		history.push("/");
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img
						src="https://i.pinimg.com/736x/37/7a/80/377a80e510c8c6440b1301bf95fa1b3d.jpg"
						style={{ width: "500px" }}
					/>
				</div>
				<div className="col">
					<div>
						<h1 className="text-center p-2">Registrate</h1>
						<form onSubmit={submitForm}>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Nombre</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" name="name" onChange={changeInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Apellido</label>
								<div className="col-sm-10">
									<input
										type="text"
										className="form-control"
										name="lastName"
										onChange={changeInput}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Contraseña</label>
								<div className="col-sm-10">
									<input
										type="password"
										className="form-control"
										id="inputPassword"
										name="password"
										onChange={changeInput}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Email</label>
								<div className="col-sm-10">
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
										name="email"
										onChange={changeInput}
									/>
								</div>
							</div>

							<button className="btn btn-warning" type="submit">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
