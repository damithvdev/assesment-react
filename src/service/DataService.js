import axios from "axios";

class DataService {
  getProducts() {
    return axios.get("http://localhost:8080/products");
  }

  getTotal(items) {
    return axios.post("http://localhost:8080/products", items);
  }
}

export default new DataService();
