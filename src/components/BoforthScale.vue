<template>
	<div class="boforth">
		<div class="wind__top">
			<h3 class="city">Ветер:</h3>
			<div class="wind__speed">{{ wind.speed.toFixed(1) }} м/с ({{ boforth.name }})</div>
			<div class="wind__direction">
				{{ getDirection(wind.deg) }}
				<ArrowSvg class="wind__arrow" :style="`transform: translateY(-50%) rotate(${wind.deg + 90}deg);`" />
			</div>
			<div class="wind__img">
				<img :src="imageUrl" alt="" width="140" />
			</div>
		</div>
		<p class="boforth__points">
			<span class="points" :style="`background-color:${boforth.color2}`">{{ boforth.points }}</span> {{ pointsEnding(boforth.points) }} по шкале Бофорта
		</p>
		<div class="boforth__bar">
			<div class="boforth__level" :style="`width:${(boforth.points / 12) * 100}%;background-image: repeating-linear-gradient(-60deg, ${boforth.color}, ${boforth.color} 10px, ${boforth.color2} 10px, ${boforth.color2} 20px);`"></div>
		</div>
		<div class="boforth__earth">На суше: {{ boforth.descriptionEarth }}</div>
		<div class="boforth__sea">На море: {{ boforth.descriptionSea }}</div>
	</div>
</template>

<script setup>
import ArrowSvg from './../assets/img/svg/ArrowSvg.vue'

const props = defineProps(["boforth", "wind"]);
const imageUrl = new URL(`/src/assets/img/Beaufort_scale_${props.boforth.points}.jpg`, import.meta.url).href;

const directions = {
	0: "С",
	22.5: "ССВ",
	45: "СВ",
	67.5: "ВСВ",
	90: "В",
	112.5: "ВЮВ",
	135: "ЮВ",
	157.5: "ЮЮВ",
	180: "Ю",
	202.5: "ЮЮЗ",
	225: "ЮЗ",
	247.5: "ЗЮЗ",
	270: "З",
	292.5: "ЗСЗ",
	315: "СЗ",
	337.5: "ССЗ",
};

const getDirection = (deg) => {
	const degree = Math.round(deg / 22.5) * 22.5;
	return directions[degree];
}

const pointsEnding = (points) => {
	switch (points) {
		case 1:
			return 'балл'
		case 2:
		case 3:
		case 4:
			return 'балла'
		default:
			return 'баллов'
	}
}
</script>
