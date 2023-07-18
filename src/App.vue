<template>
	<TheHeader />
	<div class="container">
		<div class="weather">
			<div class="weather__left" v-if="data.value">
				<div class="weather-header">
					<h3 class="city">{{ data.value.name }}</h3>
					<p class="time">Сейчас {{ timeNow }}, часовой пояс {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</p>
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
					<p class="air-pressure">Давление: {{ Math.round(data.value.main.pressure * 0.7500638) }} мм рт. ст.</p>
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
import { ref, onBeforeMount, reactive } from "vue";
import { useBoforthStore } from "./stores/boforth.js";
import { useApiStore } from "./stores/api.js";
const boforthStore = useBoforthStore();
const apiStore = useApiStore();

const data = ref({});
const windSpeed = ref(0);
const boforth = reactive({});

onBeforeMount(async () => {
	await apiStore.getData();
	data.value = apiStore.apiData
	console.log(data.value);

	await apiStore.getWindSpeed();
	windSpeed.value = await apiStore.getWindSpeed();

	boforth.value = boforthStore.getBoforth(windSpeed.value);
	console.log('boforth is: ' + boforth.value);

});

const dateWithouthSecond = new Date();
const timeNow = dateWithouthSecond.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const getTime = timestamp => {
	const date = new Date(timestamp * 1000);
	const hours = date.getHours();
	const minutes = "0" + date.getMinutes();
	return `${hours}:${minutes}`;
};

const getCelsius = temp => `${Math.round(temp - 273.15)}`;
</script>
<style scoped></style>
