<template>
	<div class="snow">
		<p>Недавние осадки:</p>
		<ul class="snow__list">
			<li v-for="(key, value) in snow" :key="key">
				<span>{{ value === '1h' ? '1 час' : value === '3h' ? '3 часа' : '' }}</span> — <span>выпало {{ key }}</span> мм снега
			</li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps(["snow"]);
</script>

<style lang="scss" scoped></style>
