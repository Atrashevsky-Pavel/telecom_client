import axios from "axios";

export default class DogsService {
  static async getDogs(filter) {
    const response = await axios.post("http://localhost:3200/dogs", filter);
    return response.data;
  }
}
