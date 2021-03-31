import axios from "axios";

const BASE_API = process.env.REACT_APP_TMDB_BASE_API;
const API_KEY = process.env.REACT_APP_API_KEY;
const token = process.env.REACT_APP_TMDB_API_TOKEN;


export default async function callApi({ url, method, data, option }) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}&languege=vi-VN`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}
