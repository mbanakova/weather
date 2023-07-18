<template>
	<TheHeader />
	<div class="container">
		<div class="weather">
			<div class="weather__left" v-if="data.value">
				<div class="weather-header">
					<h3 class="city">{{ data.value.name }}</h3>
					<p class="time">Сейчас {{ timeNow }},<br>часовой пояс {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</p>
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
				<Snow v-if="data.value.snow" :snow="data.value.snow" />
				<div class="weather-info">
					<p class="humidity">Влажность: {{ data.value.main.humidity }}%</p>
					<p class="air-pressure">Давление: {{ airPressure }} мм рт. ст.</p>
					<p class="air-clouds">Облачность: {{ data.value.clouds.all }}%</p>
					<p class="air-observe">Видимость: {{ data.value.visibility / 1000 }} км</p>
				</div>
				<div class="daylight">
					<div class="sunrize">Восход {{ getTime(data.value.sys.sunrise) }}</div>

					<div class="sunset">Закат {{ getTime(data.value.sys.sunset) }}</div>
				</div>
			</div>
			<BoforthScale v-if="boforth.value" :boforth="boforth.value" :wind="data.value.wind" />
		</div>
	</div>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";
import Rain from "./components/Rain.vue";
import Snow from "./components/Snow.vue";
import BoforthScale from "./components/BoforthScale.vue";
import { ref, onBeforeMount, reactive, computed, onMounted, watch } from "vue";
import { useBoforthStore } from "./stores/boforth.js";
import { useApiStore } from "./stores/api.js";
const boforthStore = useBoforthStore();
const apiStore = useApiStore();

const data = ref({});
const windSpeed = ref(0);
const boforth = reactive({});
const airPressure = ref(null)
const coords = reactive({ lat: 0, lon: 0 })
const hasCoords = ref(false);

onBeforeMount(() => {

	const getCoords = () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			coords.lat = position.coords.latitude.toFixed(4)
			coords.lon = position.coords.longitude.toFixed(4)
			hasCoords.value = true
		}, error => {
			console.log(error);
		})
	}
	getCoords()
});


onMounted(async () => {
	setTimeout(async () => {
		await apiStore.getData(coords.lat, coords.lon);
		data.value = apiStore.apiData

		await apiStore.getWindSpeed();
		windSpeed.value = await apiStore.getWindSpeed();

		boforth.value = await boforthStore.getBoforth(windSpeed.value);

		airPressure.value = await apiStore.getAirPressure();
	}), 800
})

const timeNow = computed(() => {
	const dateWithouthSecond = new Date();
	return dateWithouthSecond.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
})

const getTime = timestamp => {
	const date = new Date(timestamp * 1000);
	const hours = date.getHours();
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	return `${hours}:${minutes}`;
};

const getCelsius = temp => `${Math.round(temp - 273.15)}`;
</script>
<style scoped></style>
