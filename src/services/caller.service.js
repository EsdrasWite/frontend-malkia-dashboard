import axios from 'axios';

const Axios = axios.create({
    baseURL:'http://localhost:7000'
})

export default Axios;