import axios from 'axios';

const getBuzzwordApi = () => axios.get("http://localhost:5000/ninjify/list")
const getBuzzNinjaApi = (ninjaNameArr) => axios.get("http://localhost:5000/ninjify", { params: { x: ninjaNameArr } })

export {
  getBuzzwordApi,
  getBuzzNinjaApi
};
