import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const APIKEY = 'fe0815010973f1c35df6ecd30041ee28'
// fe0815010973f1c35df6ecd30041ee28


export const useApiStore = defineStore('api', () => {
  const apiData = reactive({})
  // const coords = reactive({ lat: 0, lon: 0 })

  // const getCoords = async () => {
  //   // const coords = { lat: 0, lon: 0 }
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     coords.lat = position.coords.latitude.toFixed(4)
  //     coords.lon = position.coords.longitude.toFixed(4)
  //     console.log('coords ' + coords.lat)
  //   }, error => {
  //     console.log(error);
  //   })

  //   getData()
  // }

  const getData = async (lat, lon) => {
    try {
      const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${APIKEY}`)
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
  return { apiData, getWindSpeed, getData, getAirPressure }
})
