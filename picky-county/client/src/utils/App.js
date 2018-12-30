import axios from "axios";

export default {

	getHouses: function() {
		return axios.get("/api/houses")
	},

};
