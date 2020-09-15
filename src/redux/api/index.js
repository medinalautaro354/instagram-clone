import axios from "axios";
import {apiurl}  from "../../config/index";
import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async() =>(await AsyncStorage.getItem('token'));

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: apiurl + url,
    data,
    headers,
  });
