import { api_url } from "../back";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: null,
			accesToken: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			example_function: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			change_color: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signin_user: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/login", requestPost)
					.then(response => response.json())
					.then(result => {
						setStore({ accesToken: result["access_token"], user: result });
						const store = getStore();
						console.log(store.user);
					})
					.catch(error => console.log("Error", error));
			},
			user_authentic: () => {
				const store = getStore();
				return store.accesToken !== null;
			},
			register: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/signup", requestPost)
					.then(response => response.json())
					.then(result => {
						console.log("done");
					})
					.catch(error => console.log("Error", error));
			},
			log_out: () => {
				const store = getStore();
				store.user = null;
				store.accesToken = null;
			}
		}
	};
};

export default getState;
