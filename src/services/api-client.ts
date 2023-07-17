import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d20902ea06049dbb236a94ad08684dd",
  },
});
