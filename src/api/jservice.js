import axios from 'axios';

const API = {
  getCategories(page, count=100) {
    return axios('http://jservice.io/api/categories', {
      params: {
        count,
        offset: (page - 1) * count
      }
    });
  },

  getClue(categoryID, value) {
    return axios('http://jservice.io/api/clues', {
      params: {
        category: categoryID,
        value
      }
    });
  }
};

export default API;
