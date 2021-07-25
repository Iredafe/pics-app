import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    timeout:1000,
    headers:{
        Authorization: 'Client-ID m7F9R-ap0OPqyyyw0JFPJc1sz_9trOtqX4Oq0Fo_Uv8'
    }
})