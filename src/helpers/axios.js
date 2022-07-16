import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const headers = {};

if (localStorage.elAdmT) {
  headers.Authorization = `Bearer ${localStorage.getItem('elAdmT')}`;
} else if (localStorage.elUsrT) {
  headers.Authorization = `Bearer ${localStorage.getItem('eUsrT')}`;
}

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
