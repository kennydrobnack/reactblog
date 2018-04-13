import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

axios.interceptors.request.use(request => {
    console.log("REQUEST from interceptor: ", request)
    return request
}, error => {
    console.log("ERROR from interceptor: ", error)
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log("RESPONSE from interceptor: ", response)
    return response
}, error => {
    console.log("ERROR from interceptor: ", error)
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
