import axios from "axios";
import {apiurl}  from "../../config/index";
import AsyncStorage from '@react-native-community/async-storage';
import { Service } from 'axios-middleware';


export const getToken = async() =>(await AsyncStorage.getItem('token'));

export const apiCall = async (url, data, headers, method) =>{
  const service = new Service(axios);

  let token = await getToken();

  let config = {
    "AccessToken": token
  }

  service.register({
    onRequest(config) {
      return config;
    },
    onSync(promise) {
      return promise;
    },
    onResponse(response) {

      console.log('Probando: ', response);

      return response;
    }
  });
  
  return axios({
    method,
    url: apiurl + url,
    data,
    headers,
  });

}
