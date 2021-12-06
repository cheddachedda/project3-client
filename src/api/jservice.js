import axios from 'axios';

const API = {
  getCategories(count, offset) {
    return axios('http://jservice.io/api/categories', { params: { count, offset }});
  }
};

export default API;
