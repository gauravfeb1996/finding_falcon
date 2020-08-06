// import npm packages
import axios from "axios";

// import local files
import { BASE_URL } from "../constants";

class Proxy {

 constructor() {
   this.headers = {
     "Content-Type": "application/json",
     "Accept": "application/json"
   };
 }

 call(method, url, data = {}) {
   return axios({
     headers: this.headers,
     method,
     url,
     baseURL: BASE_URL,
     data,
     timeout: 60000,
     responseType: "json"
   });
 }
}

export default new Proxy();