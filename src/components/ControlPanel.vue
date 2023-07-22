<template>
  <div class="control-panel shadow">
    <form class="search" @submit.prevent="onSubmit(location)">
      <input class="input" type="text" placeholder="введите город, например, kishinev" v-model.trim="location">
    </form>
    <button @click="getCoords" class="button">показать погоду в моём городе</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const location = ref('')

const emit = defineEmits(["userSubmit", "getUserCoords"])

const onSubmit = (city) => {
  emit('userSubmit', city)
  location.value = ''
}

const getCoords = () => {
  emit('getUserCoords')
}
</script>
