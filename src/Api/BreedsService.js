import axios from "axios";

export default class BreedsService {
  static async getBreeds() {
    const response = await axios.get("http://localhost:3200/breeds");
    return response.data;
  }
}
