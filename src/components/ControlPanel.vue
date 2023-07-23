<template>
  <div class="control-panel shadow">
    <form class="search" @submit.prevent="onSubmit(location)">
      <label class="label" for="search">введите город:</label>
      <input class="input" type="text" id="search" placeholder="kishinev" v-model.trim="location">
    </form>
    <form class="select">
      <label class="label" for="popular">популярные места:</label>
      <select @change="onChange(city)" name="popular" v-model="city" id="popular">
        <option v-for="city in popular" :key="city" :value="city">{{ city }}</option>
      </select>
    </form>
    <button @click="getCoords" class="button">показать погоду в моём городе</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const location = ref('')
const city = ref('')

const popular = ref(["miami", "los angeles", "new york", "murmansk", "buiucani", "london", "reykjavík", "ushuaia", "pevek", "hong kong", "tokyo", "tegucigalpa", "dubai", "lima", "johannesburg", "singapore", "manila", "sydney", "kathmandu", "kabul"])

const emit = defineEmits(["userSubmit", "getUserCoords", "userSelect"])

const onSubmit = (city) => {
  emit('userSubmit', city)
  location.value = ''
}

const getCoords = () => {
  emit('getUserCoords')
}


const onChange = (userCity) => {
  console.log('user choise is ' + userCity);
  emit('userSelect', userCity)
}
</script>
