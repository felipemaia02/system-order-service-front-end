import axios from 'axios';


const api = axios.create({
  baseURL: 'http://6f60cb76d52d.ngrok.io/',
})

export default api;