import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const APIKEY = 'fe0815010973f1c35df6ecd30041ee28'
// fe0815010973f1c35df6ecd30041ee28
//  https://api.openweathermap.org/data/2.5/weather?q={city name}&lang=ru&appid=fe0815010973f1c35df6ecd30041ee28

export const useApiStore = defineStore('api', () => {
  const apiData = reactive({})

  const getDataByCoords = async (lat, lon) => {
    try {
      const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${APIKEY}`)
      apiData.value = data
      return apiData.value
    } catch (error) {
      console.log(error.message);
    }
  }


  const getDataByCityName = async (city) => {
    try {
      const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${APIKEY}`)
      apiData.value = data
      return apiData.value
    } catch (error) {
      console.log(error.message);
    }
  }

  const getAirPressure = async () => {
    return Math.round(apiData.value.main.pressure * 0.7500638)
  }

  const getWindSpeed = async () => {
    return apiData.value.wind.speed
  }
  return { apiData, getWindSpeed, getDataByCoords, getDataByCityName, getAirPressure }
})
