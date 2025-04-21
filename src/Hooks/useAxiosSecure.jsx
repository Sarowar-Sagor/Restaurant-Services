import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosInstance = axios.create({
    baseURL: 'https://restaurant-server-sigma.vercel.app',
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosInstance.interceptors.request.use((request) => {
        const token = localStorage.getItem("access-token");
        request.headers.Authorization = `Bearer ${token}`;
        return request;
    }, (error) => {
        return Promise.reject(error);
    })

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        // console.log("axios error", error.status);
        if (error.status === 401 || error.status === 403) {
            logOut()
                .then(() => {
                    navigate('/login');
                })
                // .catch(err => console.log(err))
        }
        return Promise.reject(error);
    })

    return axiosInstance;
};

export default useAxiosSecure;