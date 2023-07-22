<template>
	<TheHeader />
	<main class="main wrapper">
		<ControlPanel @user-submit="getWeatherByCityName" @getUserCoords="getCoords" />
		<div class="weather shadow" v-if="data.value">
			<div class="weather__left">
				<div class="weather-header">
					<h3 class="city">{{ data.value.name }}, {{ data.value.sys.country }}</h3>
					<p class="time">Местное время: {{ localTime(data.value.dt, data.value.timezone) }},<br>Часовой пояс: GMT {{ getGMT(data.value.timezone) }}</p>
				</div>
				<div class="weather-main">
					<p class="temperature">{{ getCelsius(data.value.main.temp) }}&deg</p>
					<div class="img"><img :src="`https://openweathermap.org/img/wn/${data.value.weather[0].icon}@2x.png`" /></div>
					<div class="feels-wrapper">
						<p class="sky">{{ data.value.weather[0].description }}</p>
						<p class="feels-like">ощущается как {{ getCelsius(data.value.main.feels_like) }}&deg</p>
					</div>
				</div>
				<Rain v-if="data.value.rain" :rain="data.value.rain" />
				<Precipitations v-if="data.value.snow" :snow="data.value.snow" :type="precipitations.snow" />
				<Precipitations v-if="data.value.rain" :snow="data.value.rain" :type="precipitations.rain" />
				<div class="weather-info">
					<p class="humidity">Влажность: {{ data.value.main.humidity }}%</p>
					<p class="air-pressure">Давление: {{ airPressure }} мм рт. ст.</p>
					<p class="air-clouds">Облачность: {{ data.value.clouds.all }}%</p>
					<p class="air-observe">Видимость: {{ data.value.visibility / 1000 }} км</p>
				</div>
				<div class="daylight">
					<div class="sunrize">Восход {{ localTime(data.value.sys.sunrise, data.value.timezone) }}</div>
					<div class="sunset">Закат {{ localTime(data.value.sys.sunset, data.value.timezone) }}</div>
				</div>
			</div>
			<BoforthScale v-if="boforth.value" :boforth="boforth.value" :wind="data.value.wind" />
		</div>
		<WeatherSkeleton v-else />

	</main>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";
import Precipitations from "./components/Precipitations.vue";
import BoforthScale from "./components/BoforthScale.vue";
import ControlPanel from "./components/ControlPanel.vue";
import WeatherSkeleton from "./components/WeatherSkeleton.vue";
import { ref, reactive, onMounted } from "vue";
import { useBoforthStore } from "./stores/boforth.js";
import { useApiStore } from "./stores/api.js";
const boforthStore = useBoforthStore();
const apiStore = useApiStore();

const data = ref({});
const windSpeed = ref(0);
const boforth = reactive({});
const airPressure = ref(null)
const coords = reactive({ lat: 36.17497, lon: -115.13722 }) //Las Vegas

const precipitations = {
	rain: 'дождя',
	snow: 'снега'
}

onMounted(async () => {
	await apiStore.getDataByCoords(coords.lat, coords.lon);
	data.value = apiStore.apiData
	calcData()
})

const getCoords = () => {
	navigator.geolocation.getCurrentPosition(async (position) => {
		coords.lat = position.coords.latitude.toFixed(4)
		coords.lon = position.coords.longitude.toFixed(4)
		await apiStore.getDataByCoords(coords.lat, coords.lon);
		data.value = apiStore.apiData
		calcData()
		console.log(data.value);
	}, error => {
		console.log(error);
	})
}

const getWeatherByCityName = async (city) => {
	console.log(city);
	await apiStore.getDataByCityName(city);

	data.value = apiStore.apiData
	calcData()
}

const calcData = async () => {
	await apiStore.getWindSpeed();
	windSpeed.value = await apiStore.getWindSpeed();

	boforth.value = boforthStore.getBoforth(windSpeed.value);

	airPressure.value = await apiStore.getAirPressure();
}

const getCelsius = temp => `${Math.round(temp - 273.15)}`;

const getGMT = timezone => (timezone / 3600 > 0 ? `+${timezone / 3600}` : `${timezone / 3600}`)

const localTime = (timestamp, timezone) => {
	const dateTime = new Date(timestamp * 1000);
	const toUtc = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
	const currentLocalTime = toUtc + 1000 * timezone;
	const selectedDate = new Date(currentLocalTime);

	const hour = selectedDate.toLocaleString("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
	return hour
}
</script>
<style scoped lang="scss">
</style>
