<template>
	<div class="rain">
		<p>Осадки за последние:</p>
		<ul class="rain__list">
			<li v-for="(key, value) in rain" :key="key">
				<span>{{ value }}</span> — <span>выпало {{ key }}</span> мм дождя
			</li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps(["rain"]);
</script>

<style lang="scss" scoped>
.rain__list {
	margin: 0;
	padding: 0;
	list-style: none;

	& li {
		padding-left: 15px;
		position: relative;
		margin-top: 5px;

		&::before {
			position: absolute;
			content: "";
			width: 4px;
			height: 4px;
			left: 5px;
			top: 50%;
			transform: translateY(-50%) rotate(45deg);
			background-color: rgb(40, 166, 212);
		}
	}
}
</style>
