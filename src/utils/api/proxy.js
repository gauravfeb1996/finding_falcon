// import npm packages
import axios from "axios";

// import local files
import { BASE_URL } from "../constants";

class Proxy {
 /**
  * Constructor to set Static Header for API calls.
  */
 constructor() {
   this.headers = {
     "Content-Type": "application/json",
     "Accept": "application/json"
   };
 }

 /**
  * Call API.
  * @param {string, string, object, object, boolean}
  * @returns {Promise}
  */
 call(method, url, params = {}, data = {}, headers = "") {
   if (headers) {
     this.headers.Authorization = headers;
   }
   return axios({
     headers: this.headers,
     method,
     url,
     baseURL: BASE_URL,
     params,
     data,
     timeout: 60000,
     responseType: "json"
   });
 }
}

export default new Proxy();