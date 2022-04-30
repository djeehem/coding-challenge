import axios from 'axios';

const getBuzzwordApi = () => axios.get("http://localhost:5000/ninjify/list")
const getBuzzNinjaApi = (buzzwordArr) => axios.get("http://localhost:5000/ninjify", { params: { x: buzzwordArr.toString().toLowerCase() } })

export {
  getBuzzwordApi,
  getBuzzNinjaApi
};
