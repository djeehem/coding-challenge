import axios from 'axios';

const url = "http://localhost:5000/ninjify";

const getBuzzwordApi = () => axios.get(`${url}/list`)
const getBuzzNinjaApi = (buzzwordArr) => axios.get(url, { params: { x: buzzwordArr.toString().toLowerCase() } })

export {
  getBuzzwordApi,
  getBuzzNinjaApi
};
