// https://api.openweathermap.org/data/2.5/weather?lat=55.899&lon=37.4421&lang=ru&appid=fe0815010973f1c35df6ecd30041ee28

const data = {
  "coord": {
    "lon": 37.4421,
    "lat": 55.899
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "переменная облачность",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 291.06,
    "feels_like": 290.79,
    "temp_min": 290.77,
    "temp_max": 291.18,
    "pressure": 1011,
    "humidity": 72
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.02,
    "deg": 10,
    "gust": 9.83
  },
  "clouds": {
    "all": 40
  },
  "dt": 1689433525,
  "sys": {
    "type": 1,
    "id": 9027,
    "country": "RU",
    "sunrise": 1689383096,
    "sunset": 1689444416
  },
  "timezone": 10800,
  "id": 550280,
  "name": "Химки",
  "cod": 200
}
export default data