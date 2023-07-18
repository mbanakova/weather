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
			<span class="points" :style="`background-color:${boforth.color2}`">{{ boforth.points }}</span> балла по шкале Бофорта
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

function getDirection(deg) {
	const degree = Math.round(deg / 22.5) * 22.5;
	return directions[degree];
}
</script>

<style lang="scss" scoped>
.wind__top {
	display: grid;
	grid-template-columns: 1fr 140px;
	column-gap: 20px;
	grid-template-areas:
		"title img"
		"speed img"
		"direction img";
}

.wind__speed {
	display: flex;
	align-items: center;
	flex-shrink: 1;
	gap: 10px;
	grid-area: speed;
}

.wind__direction {
	position: relative;
	padding-right: 30px;
	grid-area: direction;
	justify-self: start;
	align-self: start;
}

.wind__arrow {
	position: absolute;
	content: "";
	top: 50%;
	right: -5px;
	width: 25px;
	height: 25px;
	transform-origin: center;
	fill: #9611c6;
}

.wind__img {
	flex-shrink: 0;
	grid-area: img;
}

.boforth {
	max-width: 450px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.boforth__bar {
	width: 100%;
	height: 40px;
	background-color: #d8ecf3;
	position: relative;
	border-radius: 6px;
}

.boforth__level {
	background-image: repeating-linear-gradient(-60deg, #e29804, #e29804 10px, orange 10px, orange 20px);
	height: 40px;
	width: 0;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 6px;
}

.boforth__points {
	display: flex;
	align-items: center;
	gap: 10px;
}

.points {
	font-size: 30px;
	font-weight: 700;
	padding: 10px;
	border-radius: 6px;
	color: white;
}
</style>
