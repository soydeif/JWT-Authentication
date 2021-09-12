import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	let history = useHistory();

	const firstValue = {
		email: "",
		password: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		actions.signin_user(loginValue);
	};

	if (actions.user_authentic()) {
		console.log("pri");
		history.push("/private");
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-6 pt-5">
					<img src="http://pngimg.com/uploads/cat/cat_PNG50480.png" style={{ width: "200px" }} />
				</div>
				<div className="col">
					<div className="container pt-5">
						<h1 className="text-center p-2">Login</h1>
						<form onSubmit={submitForm}>
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
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Password</label>
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

							<button className="btn btn-primary" type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
