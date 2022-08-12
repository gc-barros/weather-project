<template>
  <main class="main">
    <button class="back-button" aria-label="Voltar para a página anterior" title="Voltar para a página anterior" v-if="currentPage != 'HomePage'" @click="handleBackPage"></button>
    <SwitchTemp />
    <component :is="currentPage" />
    <SelectLang />
  </main>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import WeatherForecast from "./components/WeatherForecast.vue";
import NextFiveDays from "./components/NextFiveDays.vue";
import SwitchTemp from "./components/SwitchTemp.vue";
import SelectLang from "./components/SelectLang.vue";

import { useWeatherStore } from "./stores/weather"
import { storeToRefs } from 'pinia';

export default {
  name: 'App',
  components: {
    HomePage,
    WeatherForecast,
    NextFiveDays,
    SwitchTemp,
    SelectLang,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { currentPage } = storeToRefs(weatherStore);

    return {
      currentPage
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleBackPage() {
      if (this.currentPage === "WeatherForecast") {
        this.currentPage = "HomePage"
      } else {
        this.currentPage = "WeatherForecast"
      }
    }
  }
}
</script>

<style>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("./assets/img/sky.jpg") no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.back-button {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 44px;
  height: 44px;
  border: 0;
  background: url("../src/assets/img/right-arrow.svg") no-repeat center / contain;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .back-button {
    width: 24px;
    height: 24px;
    top: 15px;
    left: 15px;
  }
}
</style>
