import axios from "axios";

export default {

	getHouses: function() {
		return axios.get("/api/houses")
	},

	getPoints: function() {
		return axios.get("/api/points")
	},

	addPoints: function(data) {
		return axios.post("/api/points", data)
	},

	addHouse: function(data) {
		return axios.post("/api/houses", data)
	},

	deleteHouse: function(id) {
		return axios.delete("/api/houses/" + id)
	},

};
