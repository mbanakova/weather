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
let location = ref('')

const emit = defineEmits(["userSubmit", "getUserCoords"])

const onSubmit = (city) => {
  emit('userSubmit', city)
}

const getCoords = () => {
  emit('getUserCoords')
}
</script>

<style scoped lang="scss">
.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px 30px;
}

.search {
  max-width: 400px;
  width: 100%;
}

.input {
  background-color: #fff;
  border: 2px solid lighten(#257e93, 30%);
  padding: 10px 15px;
  border-radius: 6px;
  width: 100%;
}
</style>
