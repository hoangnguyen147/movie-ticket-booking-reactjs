import axios from "axios";

const BASE_API = process.env.TDMB_BASE_API;
const API_KEY = process.env.API_KEY;

export default async function callApi({ url, method, data, option }) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}&${API_KEY}`,
      data,
      headers: { ...option?.headers },
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}
