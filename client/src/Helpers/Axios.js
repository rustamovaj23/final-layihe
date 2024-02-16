import axios from "axios";

const token = localStorage.getItem('token')
axios.defaults.baseURL = 'http://localhost:8080/'
if (token) {
    console.log('token var')
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}
export default axios;