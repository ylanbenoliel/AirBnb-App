import axios from 'axios'
import config from '../utils/config'
import AsyncStorage from '@react-native-community/async-storage'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/'
})

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@AirBnbApp:token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  } catch (err) {

  }
})

export default api