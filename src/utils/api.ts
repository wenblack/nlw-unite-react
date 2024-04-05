import axios from 'axios';

const UrlApi = "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"

export const API = () => {


  axios.get(UrlApi)
    .then(res => res.data)
    .catch(error => { error })
};