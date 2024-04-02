import axios from "axios";
//TODO: axios interceptor
class Http {
    static async get(url) {
        try {
            const res = await axios.get(url)
            return res
        }
        catch {
            console.error(`${error.message}`);
        }
    };
    static async post(url, data) {
        try {
            const res = await axios.post(url, body)
            return res;
        }
        catch {
            console.error(`${error.message}`);
        }
    };
    static put() { };
    static delete() { }
}
export default Http