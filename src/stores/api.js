import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const APIKEY = 'fe0815010973f1c35df6ecd30041ee28'
// fe0815010973f1c35df6ecd30041ee28


export const useApiStore = defineStore('api', () => {
  const apiData = reactive({})
  const coords = ref({ lat: 0, lon: 0 })

  const getCoords = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      coords.lat = position.coords.latitude.toFixed(4)
      coords.lon = position.coords.longitude.toFixed(4)
    }, error => {
      console.log(error);
    })
  }

  const getData = async () => {
    try {
      const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=55.899&lon=37.4427&lang=ru&appid=${APIKEY}`)
      apiData.value = data
      return apiData.value
    } catch (error) {
      console.log(error.message);
    }
  }

  const getWindSpeed = async () => {
    return apiData.value.wind.speed
  }

  return { apiData, getWindSpeed, getData }
})
