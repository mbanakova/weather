<template>
	<div class="boforth">
		<div class="wind__top">
			<h3 class="city">Ветер:</h3>
			<div class="wind__speed">{{ wind.speed.toFixed(1) }}м/с ({{ boforth.name }})</div>
			<div class="wind__direction">
				{{ getDirection(wind.deg) }}
				<svg class="wind__arrow" id="Icons" :style="`transform: translateY(-50%) rotate(${wind.deg + 90}deg);`" viewBox="0 0 32 32" xml:space="preserve" fill="#ff0000">
					<g><path d="M21,23c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6   c0.4,0.4,0.4,1,0,1.4l-6,6C21.5,22.9,21.3,23,21,23z" /></g>
					<g><path d="M27,17H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S27.6,17,27,17z" /></g>
				</svg>
			</div>
			<div class="wind__img">
				<img :src="imageUrl" alt="" width="140" />
			</div>
		</div>
		<p class="boforth__points">
			<span class="points" :style="`background-color:${boforth.color2}`">{{ boforth.points }}</span> балла по шкале Бофорта
		</p>
		<div class="boforth__bar"><div class="boforth__level" :style="`width:${(boforth.points / 12) * 100}%;background-image: repeating-linear-gradient(-60deg, ${boforth.color}, ${boforth.color} 10px, ${boforth.color2} 10px, ${boforth.color2} 20px);`"></div></div>
		<div class="boforth__earth">На суше: {{ boforth.descriptionEarth }}</div>
		<div class="boforth__sea">На море: {{ boforth.descriptionSea }}</div>
	</div>
</template>

<script setup>
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
}

.boforth__level {
	background-image: repeating-linear-gradient(-60deg, #e29804, #e29804 10px, orange 10px, orange 20px);
	height: 40px;
	width: 0;
	position: absolute;
	top: 0;
	left: 0;
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
