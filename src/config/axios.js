import axios from 'axios';

const url = "https://api.themoviedb.org/3/";


const clientAxios = axios.create({
    baseURL:url
})

export default clientAxios

