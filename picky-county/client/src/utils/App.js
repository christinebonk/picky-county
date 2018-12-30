import axios from "axios";

export default {

	getHouses: function() {
		return axios.get("/api/houses")
	},

	getPoints: function() {
		return axios.get("/api/points")
	},

	addPoints: function() {
		return axios.post("/api/points")
	}

};
