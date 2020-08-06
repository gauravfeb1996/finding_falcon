import proxy from "./proxy";
import { BASE_URL } from "../constants";

const apiHandler = {
    
    getDataAPI: (url) => {
        return proxy
            .call("get", url, null)
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
                    }
                    console.log("Error");
                }
                else {
                    console.log("Error");
                }
            });
    },

    postDataAPI: (url, body) => {
        return proxy
            .call("post", `${BASE_URL}${url}`, body)
            .then(response => {
                if (response && response.status === 200) {
                    return response;
                }
            })
            .catch(err => {
                if (err && err.response && err.response.status !== 404) {
                    console.log(err.response, "error here")
                }
            });
    }

    
}
export default apiHandler;