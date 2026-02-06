import axios from 'axios'


const instance  = axios.create({
    baseURL :' https://redux-ecommerce-backend-e4l0.onrender.com',
})

export default instance;