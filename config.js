import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.staging.tugage.com/v1'
});