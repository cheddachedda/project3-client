import axios from 'axios';

const API = {
  getCategories(page, count=100) {
    return axios('http://jservice.io/api/categories', {
      params: {
        count,
        offset: (page - 1) * count
      }
    });
  }
};

export default API;
