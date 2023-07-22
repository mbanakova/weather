<template>
	<div class="precipitations">
		<p>Недавние осадки:</p>
		<ul class="precipitations__list">
			<li v-for="(key, value) in snow" :key="key">
				<span>{{ value === '1h' ? 'за 1 час' : value === '3h' ? 'за 3 часа' : '' }}</span> — <span>выпало {{ key }}</span> мм {{ type }}
			</li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps(["snow", "type"]);
</script>
