<template>
	<div class="snow">
		<p>Осадки за последние:</p>
		<ul class="snow__list">
			<li v-for="(key, value) in snow" :key="key">
				<span>{{ value }}</span> — <span>выпало {{ key }}</span> мм снега
			</li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps(["snow"]);
</script>

<style lang="scss" scoped></style>
