import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api", // указание адреса сервера
  // baseURL: "http://localhost:4200/api",
  headers: {
    "Content-Type": "application/json", // обмен данными будем осуществлять в формате json
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  }
});