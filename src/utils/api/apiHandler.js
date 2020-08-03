import proxy from "./proxy";
import { BASE_URL } from "../constants";

const apiHandler = {
    
    getDataAPI: (url, params) => {
        const token = localStorage.getItem('chem-token');
        // if (token) {
            return proxy
                .call("get", url, params, null)
                .then(response => {
                    if (response && response.status === 200) {
                        let data = response.data;
                        if (data) {
                            return data;
                        }
                    }
                })
                .catch(err => {
                    console.log(err, "erorr")
                    if (err && err.response && err.response.status) {
                        if (err.response.status === 401) {
                            localStorage.removeItem("chem-token");
                        }
                        console.log("Error");
                    }
                    else {
                        console.log("Error");
                    }
                });
        // }
    },

    postDataAPI: (url, body) => {
        const token = localStorage.getItem('chem-token');
        // if (token) {
            return proxy
                .call("post", `${BASE_URL}${url}`, null, body, null)
                .then(response => {
                    if (response && response.status === 200) {
                        // ToastAlert("success", "Successfully Created");
                        return response;
                    }
                })
                .catch(err => {
                    if (err && err.response && err.response.status !== 404) {
                        console.log(err.response, "error here")
                    }
                });
        // }
    }

    
}
export default apiHandler;