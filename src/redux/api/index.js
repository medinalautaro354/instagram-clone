import axios from "axios";
import {apiurl}  from "../../config/index";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: apiurl + url,
    data,
    headers,
  });
