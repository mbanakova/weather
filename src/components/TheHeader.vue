<template>
	<header class="header">
		<h1 class="page-title">Работает на данных API openweathermap</h1> <a href="https://openweathermap.org/api" target="blank"> <img src="./../assets/img/logo_api.png" width="90"></a>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
	background-color: #212e4e;
	color: #ffffff;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 10px;
}

.page-title {
	margin: 0;
	padding: 0;
	visibility: hidden;

}
</style>
