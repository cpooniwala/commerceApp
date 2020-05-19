import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getProducts: function (query) {
    return axios.get(
      `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=0j7iapqW9cMtP87GqDaxc2Um&format=json`,
    );
  },
};
