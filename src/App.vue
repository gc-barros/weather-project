<template>
  <main class="main">
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

export default {
  name: 'App',
  components: {
    HomePage,
    WeatherForecast,
    NextFiveDays,
    SwitchTemp,
    SelectLang,
  },
  data() {
    return {
      currentPage: "HomePage",
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
</style>
