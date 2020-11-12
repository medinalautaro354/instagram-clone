import axios from "axios";
import {apiurl}  from "../../config/index";
import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async() =>(await AsyncStorage.getItem('token'));

export const apiCall = async (url, data, headers, method) => {

  const config = {
    method,
    url: apiurl + url,
    data,
    headers
  }

  let token = await getToken();

  if(token){
    config.headers = {
      "AccessToken" : token
    }
  }
  return axios.request(config)
}
