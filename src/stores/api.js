import { ref } from 'vue'
import { defineStore } from 'pinia'
const APIKEY = 'fe0815010973f1c35df6ecd30041ee28'
let coords = { lat: 0, lon: 0 }


export const useApiStore = defineStore('api', () => {
  const apiData = ref([])
  let isLoading = ref(false)

  const getCoords = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      coords.lat = position.coords.latitude.toFixed(4)
      coords.lon = position.coords.longitude.toFixed(4)
    })
  }

  const getData = async () => {
    isLoading = true
    await getCoords()
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&lang=ru&appid=${APIKEY}`)
    const data = await res.json();
    apiData.value = data
    console.log('location ' + apiData.value.name);
    isLoading = false
    return apiData.value
  }

  return { apiData, getData, getCoords, isLoading }
})
