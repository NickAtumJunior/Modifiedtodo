import axios from 'axios'
const axiosApi = axios.create();

axiosApi.interceptors.request.use(
    async(configuration) => {
        configuration.headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
        return configuration;
    },
    (error) => {

        Promise.reject(error)
    }
)
export default axiosApi;