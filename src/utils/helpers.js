import axios from "axios";

export const fetchAllProducts = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
