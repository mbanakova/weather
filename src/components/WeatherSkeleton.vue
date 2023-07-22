<template>
  <div class="weather shadow">
    <div class="weather__left">
      <div class="weather-header">
        <h3 class="city">
          <SkeletonPlaceholder width="200px" height="24px" border-radius="4px" />
        </h3>
        <p class="time">
          <SkeletonPlaceholder width="250px" height="43px" border-radius="4px" />
        </p>
      </div>
      <div class="weather-main">
        <p class="temperature">
          <SkeletonPlaceholder width="78px" height="104px" border-radius="4px" />
        </p>
        <div class="img">
          <SkeletonPlaceholder width="50px" height="50px" border-radius="50%" />
        </div>
        <div class="feels-wrapper">
          <SkeletonPlaceholder width="147px" height="100px" border-radius="4px" />
        </div>
      </div>
      <div class="precipitations">
        <p> </p>
        <div class="precipitations__list">
          <SkeletonPlaceholder width="250" height="20px" border-radius="4px" />
        </div>
      </div>
      <div class="weather-info">
        <SkeletonPlaceholder width="200px" height="86px" border-radius="4px" />
      </div>
      <div>
        <SkeletonPlaceholder width="400px" height="67px" border-radius="4px" />
      </div>
    </div>
    <div class="boforth">
      <div class="wind__top">
        <h3 class="city">
          <SkeletonPlaceholder width="240px" height="40px" border-radius="4px" />
        </h3>
        <div class="wind__speed">
          <SkeletonPlaceholder width="200px" height="44px" border-radius="4px" />
        </div>
        <div class="wind__direction">
        </div>
        <div class="wind__img">
          <SkeletonPlaceholder width="140px" height="135px" border-radius="8px" />
        </div>
      </div>
      <p class="boforth__points">
        <span class="points">
          <SkeletonPlaceholder width="40px" height="40px" border-radius="8px" />
        </span>
        <SkeletonPlaceholder width="220px" height="40px" border-radius="8px" />
      </p>
      <div class=" boforth__bar">
        <SkeletonPlaceholder width="400px" height="40px" border-radius="8px" />
      </div>
      <div class="boforth__earth">
        <SkeletonPlaceholder width="400px" height="60px" border-radius="8px" />
      </div>
      <div class="boforth__sea">
        <SkeletonPlaceholder width="400px" height="60px" border-radius="8px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SkeletonPlaceholder from "./SkeletonPlaceholder.vue";
</script>
