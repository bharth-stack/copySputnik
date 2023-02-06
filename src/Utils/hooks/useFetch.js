import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

const useFetch = async ({method, relativePath, withCredentials = true, payload={}}) => {
    const baseUrl = `${API_URL}/${API_VERSION}${relativePath}`;

    try {
        const response = await axios({
            method,
            url: baseUrl, 
            withCredentials,
            data: { ...payload }
          });
        const data = response?.data?.response;
        return data;
    } catch (error) {
        console.log("useFetch Error", error.message)
        throw error;
    }
}

export default useFetch