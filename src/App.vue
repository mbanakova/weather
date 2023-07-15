<template>
	<TheHeader />
	<div class="container">
		<div class="weather">
			<div class="weather__left">
				<div class="weather-header">
					<h3 class="city">{{ data.name }}</h3>
					<p class="time">Сейчас {{ timeNow }}, часовой пояс {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</p>
				</div>
				<div class="weather-main">
					<p class="temperature">{{ getCelsius(data.main.temp) }}&deg</p>
					<div class="img"><img :src="`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`" /></div>
					<div class="feels-wrapper">
						<p class="sky">{{ data.weather[0].description }}</p>
						<p class="feels-like">ощущается как {{ getCelsius(data.main.feels_like) }}&deg</p>
					</div>
				</div>
				<Rain v-if="data.rain" :rain="data.rain" />
				<Snow v-if="data.snow" :snow="data.snow" />
				<div class="weather-info">
					<p class="humidity">Влажность: {{ data.main.humidity }}%</p>
					<p class="air-pressure">Давление: {{ Math.round(data.main.pressure * 0.7500638) }} мм рт. ст.</p>
					<p class="air-clouds">Облачность: {{ data.clouds.all }}%</p>
					<p class="air-observe">Видимость: {{ data.visibility / 1000 }} км</p>
				</div>
				<div class="daylight">
					<div class="sunrize">Восход {{ getTime(data.sys.sunrise) }}</div>

					<div class="sunset">Закат {{ getTime(data.sys.sunset) }}</div>
				</div>
			</div>
			<BoforthScale :boforth="boforth" :wind="data.wind" />
		</div>
	</div>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";
import Rain from "./components/Rain.vue";
import Snow from "./components/Snow.vue";
import BoforthScale from "./components/BoforthScale.vue";
// import data from "./data.js";
import { ref, onBeforeMount } from "vue";
import { useBoforthStore } from "./stores/boforth.js";
import { useApiStore } from "./stores/api.js";
const boforthStore = useBoforthStore();
const apiStore = useApiStore();

const data = ref([]);
const boforth = ref([]);
onBeforeMount(async () => {
	data.value = await apiStore.getData();
	if (data.value) {
		boforth.value = boforthStore.getBoforth(data.wind.speed);
	}
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
