import axios from 'axios';

const axiosCli = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
});

export default axiosCli;
