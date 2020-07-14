import axios from "axios";

// Export an object containing methods we'll use for accessing randomly generated employees

export default {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=u");
  },
};
